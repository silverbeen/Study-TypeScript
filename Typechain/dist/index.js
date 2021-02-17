"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = __importStar(require("crypto-js"));
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    Block.calculateBlockHash = function (index, previousHash, timestamp, data) {
        return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }; // 문자열로 반환
    //불린인데 들어온 블록의 구조가 유효한지 아닌지 판단
    Block.validataStructor = function (aBlock) {
        return typeof aBlock.index === "number" &&
            typeof aBlock.hash === "string" &&
            typeof aBlock.previousHash === "string" &&
            typeof aBlock.timestamp === "number" &&
            typeof aBlock.data === "string";
    };
    return Block;
}());
//static 으로 선언하지 않았더라면 사용 못함
//Block.calculateBlockHash();
var genesisBlock = new Block(0, "sdfsdfsdfsddsf", "", "hello", 1234567);
var blockchain = [genesisBlock];
var getBlockchain = function () { return blockchain; };
var getLatestBlock = function () { return blockchain[blockchain.length - 1]; };
var getNewTimeStamp = function () { return Math.round(new Date().getTime() / 1000); };
//새로운 블럭을 생성하는 함수
var createNewBlock = function (data) {
    var previousBlock = getLatestBlock(); //새로운 인덱스를 가져옴
    var newIndex = previousBlock.index + 1; //
    var newTimestamp = getNewTimeStamp();
    var newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    var newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
//console.log(createNewBlock("hello"), createNewBlock("잘가"));
var getHashforBlock = function (aBlock) {
    return Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
};
//candidataBlock, previousBlock 를 받고 유효하지 않으면 false
var isBlockVaild = function (candidataBlock, previousBlock) {
    //첫번째는 블록의 구조가 유효한지?
    if (!Block.validataStructor(candidataBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidataBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidataBlock.previousHash) {
        return false;
    }
    // 블록은 candidataBlock 블록이고, 얻은 해쉬가 candidata 블록의 해쉬와 같지 않으면
    else if (getHashforBlock(candidataBlock) !== candidataBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
var addBlock = function (candidataBlock) {
    if (isBlockVaild(candidataBlock, getLatestBlock())) {
        blockchain.push(candidataBlock);
    }
};
createNewBlock("second Block");
createNewBlock("3번쨰 Block");
createNewBlock("4번째 Block");
console.log(blockchain);
