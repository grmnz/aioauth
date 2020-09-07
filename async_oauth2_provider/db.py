import time
from typing import Optional

from authlib.common.security import generate_token

from .config import settings
from .models import AuthorizationCode, Client, Token
from .requests import Request
from .types import CodeChallengeMethod


class DBBase:
    async def create_token(self, request: Request, client: Client) -> Token:
        return Token(
            client_id=client.client_id,
            expires_in=settings.TOKEN_EXPIRES_IN,
            access_token=generate_token(42),
            refresh_token=generate_token(48),
            issued_at=time.time(),
            scope=client.get_allowed_scope(request.post.scope),
            revoked=False,
        )

    async def create_authorization_code(
        self, request: Request, client: Client,
    ) -> AuthorizationCode:
        return AuthorizationCode(
            code=generate_token(48),
            client_id=client.client_id,
            redirect_uri=request.query.redirect_uri,
            response_type=request.query.response_type,
            scope=client.get_allowed_scope(request.post.scope),
            auth_time=time.time(),
            code_challenge_method=CodeChallengeMethod.PLAIN,
            state=request.query.state,
        )

    async def get_client(
        self, request: Request, client_id: str, client_secret: Optional[str] = None
    ) -> Client:
        raise NotImplementedError()

    async def get_user(self, request: Request):
        raise NotImplementedError()

    async def get_authorization_code(
        self, request: Request, client: Client
    ) -> Optional[AuthorizationCode]:
        raise NotImplementedError()

    async def delete_authorization_code(
        self, request: Request, authorization_code: AuthorizationCode
    ):
        raise NotImplementedError()

    async def get_refresh_token(
        self, request: Request, client: Client
    ) -> Optional[Token]:
        raise NotImplementedError()

    async def revoke_token(self, request: Request, token: Token):
        raise NotImplementedError()
