#!/usr/bin/python3
import jinja2
import os

templ = """from .vegatradingclient import VegaTradingClient
from .vegatradingdataclient import VegaTradingDataClient
from .faucetclient import FaucetClient
from .walletclient import WalletClient
from .generated.proto import (
    api,
{%- for i in imports %}
    {{ i }},
{%- endfor %}
)

__all__ = [
    "VegaTradingClient",
    "VegaTradingDataClient",
    "FaucetClient",
    "WalletClient",
    "api",
{%- for a in all_list %}
    "{{ a }}",
{%- endfor %}
]
"""


def main():
    p = "vegaapiclient/generated/proto/"
    exclude_pb2 = [
        "mwitkow_goprotovalidators_validator_pb2.py",
    ]
    pb2_files = sorted(
        f[:-7]
        for f in os.listdir(p)
        if os.path.isfile(os.path.join(p, f))
        and f.endswith("_pb2.py")
        and f not in exclude_pb2
    )
    exclude_pb2_grpc = [
        "mwitkow_goprotovalidators_validator_pb2_grpc.py",
    ]
    pb2_grpc_files = sorted(
        f[:-12]
        for f in os.listdir(p)
        if os.path.isfile(os.path.join(p, f))
        and f.endswith("_pb2_grpc.py")
        and f not in exclude_pb2_grpc
    )
    imports = sorted(
        [f"{f}_pb2 as {f}" for f in pb2_files]
        + [f"{f}_pb2_grpc as {f}_grpc" for f in pb2_grpc_files]
    )
    all_list = sorted(pb2_files + [f"{f}_grpc" for f in pb2_grpc_files])
    print(
        jinja2.Template(templ).render(
            {"imports": imports, "all_list": all_list,}
        )
    )


if __name__ == "__main__":
    main()