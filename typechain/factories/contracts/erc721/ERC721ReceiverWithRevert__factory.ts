/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721ReceiverWithRevert,
  ERC721ReceiverWithRevertInterface,
} from "../../../contracts/erc721/ERC721ReceiverWithRevert";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610331806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004a600480360381019061004591906101a0565b610060565b6040516100579190610263565b60405180910390f35b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610094906102db565b60405180910390fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d2826100a7565b9050919050565b6100e2816100c7565b81146100ed57600080fd5b50565b6000813590506100ff816100d9565b92915050565b6000819050919050565b61011881610105565b811461012357600080fd5b50565b6000813590506101358161010f565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126101605761015f61013b565b5b8235905067ffffffffffffffff81111561017d5761017c610140565b5b60208301915083600182028301111561019957610198610145565b5b9250929050565b6000806000806000608086880312156101bc576101bb61009d565b5b60006101ca888289016100f0565b95505060206101db888289016100f0565b94505060406101ec88828901610126565b935050606086013567ffffffffffffffff81111561020d5761020c6100a2565b5b6102198882890161014a565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61025d81610228565b82525050565b60006020820190506102786000830184610254565b92915050565b600082825260208201905092915050565b7f5265636569766572207265766572747300000000000000000000000000000000600082015250565b60006102c560108361027e565b91506102d08261028f565b602082019050919050565b600060208201905081810360008301526102f4816102b8565b905091905056fea26469706673582212203337e5fd3f20cdf7e09bc6e97595c7f10b1729dffa9a964e3549027fb070ddf764736f6c63430008140033";

type ERC721ReceiverWithRevertConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverWithRevertConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverWithRevert__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverWithRevertConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721ReceiverWithRevert> {
    return super.deploy(overrides || {}) as Promise<ERC721ReceiverWithRevert>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721ReceiverWithRevert {
    return super.attach(address) as ERC721ReceiverWithRevert;
  }
  override connect(signer: Signer): ERC721ReceiverWithRevert__factory {
    return super.connect(signer) as ERC721ReceiverWithRevert__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverWithRevertInterface {
    return new utils.Interface(_abi) as ERC721ReceiverWithRevertInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverWithRevert {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721ReceiverWithRevert;
  }
}
