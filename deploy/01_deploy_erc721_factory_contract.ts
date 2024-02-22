import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { verify } from "../scripts/helpers/verify"

const deployERC721Factory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const tokenName = 'DNToken';
  const tokenSymbol = 'DNT';
  
  const ERC721Factory = await deploy("deployERC721Factory", {
    from: deployer,
    args: [],
    log: true,
    proxy: true,
    waitConfirmations: 6,
  });

  await verify(ERC721Factory.address, [tokenName, tokenSymbol]);
};

export default deployERC721Factory;
deployERC721Factory.tags = ["ERC721Factory"];