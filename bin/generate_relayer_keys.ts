import Wallet from 'ethereumjs-wallet';
import EthereumHDKey from 'ethereumjs-wallet/dist/hdkey';
import { bufferToHex, PrefixedHexString } from 'ethereumjs-util';

const generateKey = () => {
  const seed = Wallet.generate().getPrivateKey();
  const hdKey = EthereumHDKey.fromMasterSeed(seed);
  const wallet = hdKey.deriveChild(0).getWallet();

  console.log('Seed: ', seed.toString('hex'));
  console.log('Private Key: ', bufferToHex(wallet.getPrivateKey()));
  console.log('Public Address: ', bufferToHex(wallet.getAddress()));
};

console.log('Generating relayer keys...\n\n');

console.log('Manager:');
generateKey();

console.log('\nWorker:');
generateKey();
