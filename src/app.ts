import Block from "./block";
import Blockchain from "./blockchain";

let sebCoin = new Blockchain();
sebCoin.addBlock(new Block(new Date(), { amount: 100 }));
sebCoin.addBlock(new Block(new Date(), { amount: 20 }));

console.log('Initial blockchain:');
console.log(JSON.stringify(sebCoin, null, 4));
console.log('Is valid:', sebCoin.isValid());

// Modifying first block's data
sebCoin.chain[1].data = { amount: 200 };

console.log(JSON.stringify(sebCoin, null, 2));
console.log('Is valid:', sebCoin.isValid());