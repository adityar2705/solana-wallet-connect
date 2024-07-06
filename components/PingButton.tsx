import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import * as web3 from '@solana/web3.js'
import { FC, useState } from 'react'
import styles from '../styles/PingButton.module.css'
import { transformSync } from 'next/dist/build/swc'

export const PingButton: FC = () => {
	//get the connection to the wallet
	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

    const onClick = () => {
		//check if the wallet is connected
		if (!connection || !publicKey) {
			return;
		}

		//getting the Ping program addresses
		const programId = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa');
		const programDataAccount = new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod');
		const transaction = new web3.Transaction();

		//creating a new instruction
		const instruction = new web3.TransactionInstruction({
			keys:[
				{
					pubkey:programDataAccount,
					isSigner:false,
					isWritable:true
				},
			],
			programId
		});
		transaction.add(instruction);

		//send the transaction and get the signature
		sendTransaction(transaction, connection).then((sig) => {
			console.log(`Transaction successful! The signature is : ${sig}`);
		});

        console.log('Ping!')
    }
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}