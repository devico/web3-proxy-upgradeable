import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { ERC721 } from "../../typechain"

describe("Deployment", function () {
    it("должен успешно развернуть и инициализировать ERC721 клон", async function () {
        const [owner] = await ethers.getSigners();
    
        const ERC721Factory = await ethers.getContractFactory("ERC721Factory");
        const BaseERC721 = await ethers.getContractFactory("ERC721");
    
        // Используйте BaseERC721 для создания прокси, если ваш ERC721 поддерживает инициализацию через прокси.
        const erc721Implementation = await upgrades.deployProxy(ERC721Factory, ["Token", "TDN"], {initializer: "initialize"});
        await erc721Implementation.deployed();
    
        // Передайте адрес прокси erc721Implementation в фабрику.
        const erc721Factory = await ERC721Factory.deploy(erc721Implementation.address);
        await erc721Factory.deployed();
    
        const tx = await erc721Factory.deployERC721Clone(
            erc721Implementation.address,
            "ClonedToken",
            "CTKN",
            owner.address
        );
    
        // Ожидание подтверждения транзакции, достаточно одного вызова .wait()
        const receipt = await tx.wait();
    
        // Проверка события с учетом правильной структуры
        const event = receipt.events?.find(e => e.event === "ERC721Created");
        if (!event) throw new Error("Event ERC721Created not found");
    
        const cloneAddress = event.args?.proxy; // Используйте правильное имя параметра из события
    
        const clonedERC721 = await ethers.getContractAt("BaseERC721", cloneAddress); // Используйте правильное имя контракта
    
        await clonedERC721.initialize("ClonedToken", "CTKN");
    
        expect(await clonedERC721.name()).to.equal("ClonedToken");
        expect(await clonedERC721.symbol()).to.equal("CTKN");
        const ownerAddress = await clonedERC721.owner(); // Убедитесь, что у контракта есть функция owner() и она публичная
        expect(ownerAddress).to.equal(owner.address);
    });
})