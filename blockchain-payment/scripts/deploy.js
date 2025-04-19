async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with address:", deployer.address);

    const Payment = await ethers.getContractFactory("Payment");
    const payment = await Payment.deploy();
    await payment.deployed();

    console.log("Contract deployed at:", payment.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
