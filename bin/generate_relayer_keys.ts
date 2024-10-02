import Wallet from 'ethereumjs-wallet';
import EthereumHDKey from 'ethereumjs-wallet/dist/hdkey';
import { bufferToHex } from 'ethereumjs-util';

const generateKey = () => {
  const seed = Wallet.generate().getPrivateKey().toString('hex');

  const hdKey = EthereumHDKey.fromMasterSeed(seed as any);
  const wallet = hdKey.deriveChild(0).getWallet();

  console.log('Seed: ', seed);
  console.log('Private Key: ', bufferToHex(wallet.getPrivateKey()));
  console.log('Public Address: ', bufferToHex(wallet.getAddress()));
};

console.log('Generating relayer keys...\n\n');

console.log('Manager:');
generateKey();

console.log('\nWorker:');
generateKey();
