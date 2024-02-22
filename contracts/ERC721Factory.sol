// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./erc721/ERC721.sol";

contract ERC721Factory {
    address public implementation;

    event ERC721Created(address indexed proxy, address owner);

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function deployERC721Clone(
        address implementationContract,
        string memory name,
        string memory symbol,
        address owner
    ) external {
        address clone = createClone(implementationContract);
        ERC721(clone).initialize(name, symbol);
        ERC721(clone).transferOwnership(owner);
        emit ERC721Created(clone, owner);
    }

    function createClone(address target) internal returns (address result) {
        bytes20 targetBytes = bytes20(target);
        assembly {
            let clone := mload(0x40)
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf3)
            result := create(0, clone, 0x37)
        }
    }
}
