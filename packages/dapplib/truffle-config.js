require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purpose inner nasty flee tennis'; 
let testAccounts = [
"0x3d8c98d1f04cd7e0436409d52a97ae42082b4f713e80c4440ed8e4be47266073",
"0x83f53093870bde254df2d30ec61ae74ee9b2e1eba3ee6fcaa88419f9c64419b1",
"0xa3f7902a91499d2eae2c67f0b91abf9e3b46ba4c04a8148779500f2df4ebdb02",
"0xb610660c90ec323066f8a0cce0a5a318ce50f40c981db9adbfd7066dd871cf22",
"0x62d7b56f43d0c4b32e20435e6563de33e11b77fc30de52685969c3f282387dde",
"0xe565094cbfbddca245452ba3046c1ffb4687007dea008ad004fca77d9e39a764",
"0xba1be8618a97a580e53a9c479602155bed07268ee433db3641d1d64b98bdeedc",
"0xdbb8ddcdfa09011277bc1de11a61ef04b4474b84f2264395c94ab5f95d2807ce",
"0x1fe877eb220e9faab46631d73cb3f44fb4b18a33eab8d481fd295210690d145f",
"0x4813daacdbd36ebe9ebdc6fb70d0085e8cad412de6d22ac1a614d053c9b872cf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


