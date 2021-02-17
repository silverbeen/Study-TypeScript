import * as CryptoJS from "crypto-js";
import { TypeFormatFlags } from "typescript";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); // 문자열로 반환

  //불린인데 들어온 블록의 구조가 유효한지 아닌지 판단
  static validataStructor = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

//static 으로 선언하지 않았더라면 사용 못함
//Block.calculateBlockHash();

const genesisBlock: Block = new Block(
  0,
  "sdfsdfsdfsddsf",
  "",
  "hello",
  1234567
);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain; // 블럭이 아닌 것들은 암함 

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

//새로운 블럭을 생성하는 함수
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock(); //새로운 인덱스를 가져옴
  const newIndex: number = previousBlock.index + 1; //
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );

  addBlock(newBlock);

  return newBlock;
};

//console.log(createNewBlock("hello"), createNewBlock("잘가"));

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

//candidataBlock, previousBlock 를 받고 유효하지 않으면 false
const isBlockVaild = (candidataBlock: Block, previousBlock: Block): boolean => {
  //첫번째는 블록의 구조가 유효한지?
  if (!Block.validataStructor(candidataBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidataBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidataBlock.previousHash) {
    return false;
  }
  // 블록은 candidataBlock 블록이고, 얻은 해쉬가 candidata 블록의 해쉬와 같지 않으면
  else if (getHashforBlock(candidataBlock) !== candidataBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidataBlock: Block): void => {
  if (isBlockVaild(candidataBlock, getLatestBlock())) {
    blockchain.push(candidataBlock);
  }
};

createNewBlock("second Block");
createNewBlock("3번쨰 Block");
createNewBlock("4번째 Block");

console.log(blockchain);

export {};
