var web3 = new Web3(Web3.givenProvider || "http://176.236.121.139:9656/ext/bc/C/rpc");
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getMapVeriler",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "alici",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "verici",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "aliciSha256",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "vericiSha256",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "eFaturaSha256",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bool",
                        "name": "valid",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Compare.veriler",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMapVerilerCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_alici",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_verici",
                "type": "string"
            },
            {
                "internalType": "bytes32",
                "name": "_aliciSha256",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_vericiSha256",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_eFaturaSha256",
                "type": "bytes32"
            }
        ],
        "name": "setMapVeriler",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
var myContract = new web3.eth.Contract(abi, '0x796272c5CCbd464a0Adba6438B0adeAe9995b256', {
    from: '0x4687B23625BAa6ca2b37fa11a2721B800e662415', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

myContract.methods.getMapVerilerCount().call((err, result) => { console.log(result) });