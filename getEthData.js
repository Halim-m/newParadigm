/*ethers = require('ethers');



let url = "http://176.236.121.139:9652/ext/bc/C/rpc";
let provider = new ethers.providers.Web3Provider(window.ethereum)


// baglanan metamask wallet'inin dogru agda oldugunu kontrol etmek icin
function checkNetwork() {

    if (window.ethereum.networkVersion != "43114") {
        return false;
    }
    return true;
}


window.addEventListener('load', async () => {

    accounts = await provider.send("eth_requestAccounts", []);
    if (accounts.length == 0) {
        console.log("Hesap bulunamadi")
        alert("Hesap bulunamadi")
    }

    if (checkNetwork() != true) {
        alert("Lutfen dogru aga baglanin")
        return
    }
    signer = await provider.getSigner();
    addr = await signer.getAddress()

});


let contract_addr = '0x796272c5CCbd464a0Adba6438B0adeAe9995b256'
const ABI = [
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
const contract = new ethers.Contract(contract_addr, ABI, provider)
async function callFunction() {
    // read function cagirirken
    await contract.getMapVerilerCount(0).then(data => {
        console.log(data)
    })
}*/