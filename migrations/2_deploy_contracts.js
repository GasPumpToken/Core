const Factory = artifacts.require('UniswapV2Factory.sol');
const PumpToken = artifacts.require('PumpToken.sol');
const DumpToken = artifacts.require('DumpToken.sol');

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  await deployer.deploy(PumpToken);
  await deployer.deploy(DumpToken);
  const PumpToken = await PumpToken.deployed();
  const DumpToken = await DumpToken.deployed();
  await factory.createPair(PumpToken.address, DumpToken.address);
};
