from dataclasses import replace
from typing import Dict, List, Optional

from aioauth.models import AuthorizationCode, Client, Token
from aioauth.requests import Request
from aioauth.storage import BaseStorage

from .models import Defaults


class DB(BaseStorage):
    storage: Dict[str, List]
    defaults: Defaults

    def _get_by_client_secret(self, client_id: str, client_secret: str):
        clients: List[Client] = self.storage.get("clients", [])

        for client in clients:
            if client.client_id == client_id and client.client_secret == client_secret:
                return client

    def _get_by_client_id(self, client_id: str):
        clients: List[Client] = self.storage.get("clients", [])

        for client in clients:
            if client.client_id == client_id:
                return client

    async def get_client(
        self, request: Request, client_id: str, client_secret: Optional[str] = None
    ) -> Optional[Client]:
        if client_secret is not None:
            return self._get_by_client_secret(client_id, client_secret)

        return self._get_by_client_id(client_id)

    async def create_token(
        self,
        request: Request,
        client_id: str,
        scope: str,
        access_token: str,
        refresh_token: str,
    ):
        token = await super().create_token(
            request, client_id, scope, access_token, refresh_token
        )
        self.storage["tokens"].append(token)
        return token

    async def revoke_token(self, request: Request, refresh_token: str) -> None:
        tokens: List[Token] = self.storage.get("tokens", [])
        for key, token_ in enumerate(tokens):
            if token_.refresh_token == refresh_token:
                tokens[key] = replace(token_, revoked=True)

    async def get_token(
        self,
        request: Request,
        client_id: str,
        access_token: Optional[str] = None,
        refresh_token: Optional[str] = None,
        token_type: str = "refresh_token",
    ) -> Optional[Token]:
        tokens: List[Token] = self.storage.get("tokens", [])
        for token_ in tokens:
            if (
                refresh_token is not None
                and refresh_token == token_.refresh_token
                and client_id == token_.client_id
            ):
                return token_
            if (
                access_token is not None
                and access_token == token_.access_token
                and client_id == token_.client_id
            ):
                return token_

    async def authenticate(self, request: Request) -> Optional[bool]:
        if (
            request.post.username == self.defaults.username
            and request.post.password == self.defaults.password
        ):
            return True

    async def create_authorization_code(self, *args, **kwargs):
        authorization_code = await super().create_authorization_code(*args, **kwargs)
        self.storage["authorization_codes"].append(authorization_code)

        return authorization_code

    async def get_authorization_code(
        self, request: Request, client_id: str, code: str
    ) -> Optional[AuthorizationCode]:
        authorization_codes: List[AuthorizationCode] = self.storage.get(
            "authorization_codes", []
        )
        for authorization_code in authorization_codes:
            if (
                authorization_code.code == code
                and authorization_code.client_id == client_id
            ):
                return authorization_code

    async def delete_authorization_code(
        self,
        request: Request,
        client_id: str,
        code: str,
    ):
        authorization_codes: List[AuthorizationCode] = self.storage.get(
            "authorization_codes", []
        )
        for authorization_code in authorization_codes:
            if (
                authorization_code.client_id == client_id
                and authorization_code.code == code
            ):
                authorization_codes.remove(authorization_code)

    async def get_id_token(
        self,
        request: Request,
        client_id: str,
        scope: str,
        response_type: str,
        redirect_uri: str,
        nonce: str,
    ) -> str:
        return "generated id token"


def get_db_class(defaults: Defaults, storage: Dict[str, List]):
    DB.storage = storage
    DB.defaults = defaults
    return DB
