import { SHA256 } from 'crypto-js';

export default class Block {
  public timestamp: Date;
  public data: any;
  public previousHash?: string | null;
  public hash: string;

  constructor(timestamp: Date,
              data: any,
              previousHash?: string | null) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  public calculateHash(): string {
    return SHA256(`${this.timestamp}${JSON.stringify(this.data)}${this.previousHash}`).toString();
  }
}