import React, { useState, useEffect } from 'react';
import { abi, contractAddress } from '../lib/constants';
import { ethers } from "ethers";
export const TransactionContext = React.createContext();

let Eth;

if (typeof window !== undefined) {
    Eth = window.ethereum;
}

// Function to get contract
// ------------------------

const EthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(Eth);
    const signer = provider.getSigner();

    const TransactionContract = new ethers.Contract(
        contractAddress,
        abi,
        signer
    );

    return TransactionContract;
}

// Provider
// --------

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState();

    (Eth) && window.ethereum.on('accountsChanged', async (accounts) => {
        try {
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error);
        }
    })
    const checkWalletConnection = async (Metamask = Eth) => {
        try {
            if (!Metamask) return alert("Please install metamask");
            const accounts = await Metamask.request({ method: 'eth_requestAccounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                console.log("Wallet is connected");
                getAccountBalance();
            }
        } catch (error) {
            console.log(error);
            throw new Error('No etherium object');
        }
    }

    const getAccountBalance = async (Metamask = Eth) => {
        try {
            if (!Metamask) return alert("Please install metamask");
            const balance = await Metamask.request({ method: 'eth_getBalance', params: [currentAccount, 'latest'] });
            // Balance Variable
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkWalletConnection();
        // eslint-disable-next-line
    }, [currentAccount])

    const connectWallet = async (Metamask = Eth) => {
        try {
            if (!Metamask) return alert("Please install metamask")
            const accounts = await Metamask.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0]);
            showalert("Wallet Connected :)")
            getAccountBalance();
        } catch (error) {
            console.log(error);
            throw new Error('No etherium object');
        }
    }

    const sendTransaction = async (Metamask = Eth, connectedAccount = currentAccount) => {
        try {
            if (!Metamask) return alert("Please install metamask");
            const TransactionContract = EthereumContract();

            const nftMintingResponse = await TransactionContract.methods.mintToken("ipfs://QmXBHpJb8htFyZsbKaxX3sU1UkH5ySgHRyRMv9as1CZLg5").send({ from: currentAccount })

            const nftAddress = nftMintingResponse.events.Transfer.address;
            const nftTokenId = nftMintingResponse.events.Transfer.returnValues.tokenId;

            console.log(`${nftAddress}/${nftTokenId}`);

        } catch (error) {
            setLoading(false);
            showalert("Some Error Occured")
            console.log(error);
        }
    }

    return (
        <TransactionContext.Provider value={{
            sendTransaction,
            connectWallet,
            getAccountBalance,
            checkWalletConnection,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

