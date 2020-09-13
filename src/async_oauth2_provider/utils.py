import random
import string
from typing import List, Optional, Set, Text, Tuple, Union

from .config import settings

UNICODE_ASCII_CHARACTER_SET = string.ascii_letters + string.digits


def is_secure_transport(uri: str) -> bool:
    """Check if the uri is over ssl.

    :param uri: [description]
    :type uri: str
    :return: [description]
    :rtype: bool
    """
    if settings.INSECURE_TRANSPORT:
        return True
    return uri.lower().startswith("https://")


def get_authorization_scheme_param(
    authorization_header_value: Text,
) -> Tuple[Text, Text]:
    """[summary]

    :param authorization_header_value: [description]
    :type authorization_header_value: Text
    :return: [description]
    :rtype: Tuple[Text, Text]
    """
    if not authorization_header_value:
        return "", ""
    scheme, _, param = authorization_header_value.partition(" ")
    return scheme, param


def list_to_scope(scope: Optional[List] = None) -> Text:
    """Convert a list of scopes to a space separated string.

    :param scope: [description], defaults to None
    :type scope: Optional[List], optional
    :raises ValueError: [description]
    :return: [description]
    :rtype: Text
    """
    if isinstance(scope, str) or scope is None:
        return ""
    elif isinstance(scope, (set, tuple, list)):
        return " ".join([str(s) for s in scope])
    else:
        raise ValueError(
            "Invalid scope (%s), must be string, tuple, set, or list." % scope
        )


def scope_to_list(scope: Union[Text, List, Set, Tuple]) -> List:
    """Convert a space separated string to a list of scopes.

    :param scope: [description]
    :type scope: Union[Text, List, Set, Tuple]
    :return: [description]
    :rtype: List
    """
    if isinstance(scope, (tuple, list, set)):
        return [str(s) for s in scope]
    elif scope is None:
        return []
    else:
        return scope.strip().split(" ")


def generate_token(length=30, chars=UNICODE_ASCII_CHARACTER_SET):
    """Generates a non-guessable OAuth token

    OAuth (1 and 2) does not specify the format of tokens except that they
    should be strings of random characters. Tokens should not be guessable
    and entropy when generating the random characters is important. Which is
    why SystemRandom is used instead of the default random.choice method.
    """
    rand = random.SystemRandom()
    return "".join(rand.choice(chars) for _ in range(length))
