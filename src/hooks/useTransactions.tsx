import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api'
import { Transaction, TransactionInput } from '../types'

type TransactionsProviderProps = {
    children: ReactNode
}

type TransactionsContextData = {
    transactions: Transaction[];
    transactionToDelete: number | undefined;
    deleteTransaction: (transactionId?: number) => Promise<void>;
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions,setTransactions] = useState<Transaction[]>([])
    const [transactionToDelete,setTransactionToDelete] = useState<number | undefined>()
    const [isModalDeleteTransactionOpen,setIsModalDeleteTransactionOpen] = useState<boolean>(false)

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

    async function deleteTransaction(transactionId?: number) {
        if(!transactionId && !transactionToDelete) {
            return
        }

        if(transactionId===-1) {
            setTransactionToDelete(undefined)
            setIsModalDeleteTransactionOpen(false)
            return
        }

        if(transactionId) {
            setTransactionToDelete(transactionId)
            setIsModalDeleteTransactionOpen(true)
            return
        }

        if(transactionToDelete) {
            const res = await api.deleteTransaction(transactionToDelete)
            if(res) {
                const newTransactions = transactions.filter(t=>t.id!==transactionToDelete)
                setTransactions(newTransactions)
                setTransactionToDelete(undefined)
                setIsModalDeleteTransactionOpen(false)
            }
        }    
    }

    return (
        <TransactionsContext.Provider children={children} value={{transactions,transactionToDelete,deleteTransaction,createTransaction}}></TransactionsContext.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionsContext)
}