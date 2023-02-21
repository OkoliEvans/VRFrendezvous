import { ethers } from "hardhat";

async function sleep(ms) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
  });
}

async function main() {
  const VRF = await ethers.getContractFactory("VRFv2Consumer");
  const VRFv2Oracle = await VRF.deploy(10092);
  await VRFv2Oracle.deployed();
  console.log(`VRFv2 contract deployed to ${VRFv2Oracle.address}`);


  await sleep(45 * 1000);
  await hre.run("verify:verify", {
    address: VRFv2Oracle.address,
    constructorArguments: [10092],
  });

console.log('CONTRACT VERIFIED')

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
