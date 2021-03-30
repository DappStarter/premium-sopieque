require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note soap unlock harvest clog front sleep'; 
let testAccounts = [
"0x168482edc6f6f5621c853b803b28acf14ae6c86c9f53c133bea41868a08969a2",
"0xa35c38c159d5c08db86a648748f7d44da4825b048e19c2595c696e64e4c4b56e",
"0x9d3e785a00c81cba9604bf380423d47a3df31912502c66388b7323766f0ba0fa",
"0x28c0f907a8b5170bbe3cceaf44d63576c0843f213d02eeafad86213c8a2ef151",
"0x8c1cc7aa41c53d0b844866c0d809fb46b6910e50537c251890f453a58807cf1a",
"0x26c4215665c916c1ee07526e55a9ec58e4a51c46380733518a2d8734f3d4cd1e",
"0xc0829cd06df5724607791a494d6cc629e9317ad1f45101ab318fd2988170c094",
"0x87c7b172d8a603799f5b900dcd9a56298ffa3942294c7ae26929e4199cad18f8",
"0x34e26553a57286ab1f725161e7f807cecbd42c15ede9833e6f104304b1c06c57",
"0x66c93b502109a0ef218184d18fad073f8503f312eb761077ec0ecb4d046269ba"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
