const { expect } = require("chai");
const { ethers } = require("hardhat");

const fs = require('fs')
const results = [];
const dataJson = require('./output1.json');
let final = [];

let callback = () => {
    fs.writeFile("final.json", JSON.stringify(final), function (err) {
        console.log(final)
        if (err) throw err;
        console.log('complete');
    })
}
describe('#isRare', () => {
    it('Test', async () => {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Test");
        const hardhatToken = await Token.deploy();
        // console.log(dataJson);
        await dataJson.forEach(async (element, index, array) => {
            // console.log(element.NF_TOKEN_ID, element.POOL_ADDRESS);

            const ownerBalance = await hardhatToken.isRare(parseInt(element.NF_TOKEN_ID), element.POOL_ADDRESS);
            if (ownerBalance === true) {
                console.log(index, element.NF_TOKEN_ID, ownerBalance);
                final.push(element.NF_TOKEN_ID);

            }
            if ((index + 1) === array.length) {
                callback();
            }

        })



        // console.log(ownerBalance);
        // expect(await hardhatToken.isRare(101776, '0x319f4366b2ec8b0120d09522c88f919bedbb18ff')).to.eq(true);
    })

    // it('returns false sometimes', async () => {
    //     expect(await nftDescriptor.isRare(2, `0x${'b'.repeat(40)}`)).to.eq(false)
    // })
})