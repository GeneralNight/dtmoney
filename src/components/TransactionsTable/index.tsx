import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Transaction } from "../../types"
import { TransactionsTableRow } from "../TransactionsTableRow"
import { Container } from "./styles"

export const TransactionsTable = () => {

    const [transactions,setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
        api.getTransactions().then(res=>{
            console.log(res.data)
            setTransactions(res.data.transactions)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            return <TransactionsTableRow transaction={transaction} key={transaction.id}/>
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}