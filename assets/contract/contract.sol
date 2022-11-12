// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.4;

contract Compare {
    struct veriler {
        string alici;
        string verici;
        bytes32 aliciSha256;
        bytes32 vericiSha256;
        bytes32 eFaturaSha256;
        bool valid;
    }

    address private owner;

    uint256[] verilerList;

    mapping(uint256 => veriler) mapVeriler;

    modifier onlyOwner() {
        require(msg.sender == owner, "Bu islem icin yetkiniz yok.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getMapVeriler(uint256 _index)
        public
        view
        returns (veriler memory)
    {
        return mapVeriler[_index];
    }

    function getMapVerilerCount() public view returns (uint256) {
        return verilerList.length;
    }

    function setMapVeriler(
        uint256 _index,
        string memory _alici,
        string memory _verici,
        bytes32 _aliciSha256,
        bytes32 _vericiSha256,
        bytes32 _eFaturaSha256
    ) public onlyOwner {
        veriler memory newVeriler;
        newVeriler.alici = _alici;
        newVeriler.verici = _verici;
        newVeriler.aliciSha256 = _aliciSha256;
        newVeriler.vericiSha256 = _vericiSha256;
        newVeriler.eFaturaSha256 = _eFaturaSha256;
        if (
            (_aliciSha256 == _vericiSha256) && (_aliciSha256 == _eFaturaSha256)
        ) {
            newVeriler.valid = true;
        }
        mapVeriler[_index] = newVeriler;
        verilerList.push(_index);
    }
}
