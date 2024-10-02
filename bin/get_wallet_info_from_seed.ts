import EthereumHDKey from 'ethereumjs-wallet/dist/hdkey';
import { bufferToHex } from 'ethereumjs-util';

const args = process.argv.slice(2); // Get command line arguments
if (args.length < 1) {
  console.error('Please provide a seed as a command line argument.');
  process.exit(1);
}

// This funky cast to any is necessary to replicate the exact reading flow that KeyManger.ts uses.
// If you correctly operate on a Buffer, you will get different wallet results.
const seed = args[0] as any;

const hdKey = EthereumHDKey.fromMasterSeed(seed);
const wallet = hdKey.deriveChild(0).getWallet();

console.log('Seed: ', seed.toString('hex'));
console.log('Private Key: ', bufferToHex(wallet.getPrivateKey()));
console.log('Public Address: ', bufferToHex(wallet.getAddress()));
