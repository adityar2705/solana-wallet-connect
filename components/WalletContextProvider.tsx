import { FC, ReactNode, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
require("@solana/wallet-adapter-react-ui/styles.css");

//creating the wallet component
const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    //get the endpoint and the list of wallets to use for our button
    const endpoint = web3.clusterApiUrl('devnet');
    const wallets = useMemo(() => [],[]);
    
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets = {wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};


export default WalletContextProvider;