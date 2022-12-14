import ethers from "ethers";
import { keccak256 } from "ethers/lib/utils";
import { Keccak } from "keccak";

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
const CONTRACT_ADDRESS = "0x796272c5CCbd464a0Adba6438B0adeAe9995b256";


export const getContractData = async (dataIndex) => {
    debugger;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ct = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

    const tokenName = await ct.getMapVeriler(dataIndex);
    console.log(tokenName);
    console.log("test");

};

export const setContractData = async (dataIndex, getter, setter, getterHash, setterHash, eFaturaHash) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ct = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

    const tokenName = await ct.setMapVeriler(dataIndex, getter, setter, getterHash, setterHash, eFaturaHash);
    console.log(tokenName);
    console.log("test");

};

function createKeccak(data) {
    hash = createKeccakHash('keccak256').update(data).digest('hex');
    return hash;
}

/*ornek set func
*/

