import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from "@solana/web3.js";
 
const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}
 
const connection = new Connection(clusterApiUrl("mainnet-beta"));
const publicKey = new PublicKey(suppliedPublicKey);
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
console.log(`✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,);