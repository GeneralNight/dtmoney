import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api'
import { Transaction, TransactionInput } from './types'

export type TransactionsProviderProps = {
    children: ReactNode
}

export type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions,setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
        api.getTransactions().then(res=>{
            console.log(res.data)
            setTransactions(res.data.transactions)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    async function createTransaction(data: TransactionInput) {
        
        const {transaction} = await api.createTransactions(data)
        
        transaction.createdAt = new Date().toString()
        
        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider children={children} value={{transactions,createTransaction}}></TransactionsContext.Provider>
    )
}