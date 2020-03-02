import Block from "./block";

export default class Blockchain {
  public chain: Array<Block>;

  constructor() {
    this.chain = new Array<Block>();
    // Add genesis block to chain
    this.chain.push(new Block(new Date(), null, null));
  }
  
  public addBlock(block: Block): void {
    block.previousHash = this.getLatestBlock().calculateHash();
    block.hash = block.calculateHash();
    this.chain.push(block);
  }

  public getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  public isValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      if (this.chain[i].hash !== this.chain[i].calculateHash()) {
        return false;
      }
      if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
        return false;
      }
    }
    return true;
  }
}