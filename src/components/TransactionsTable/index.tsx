
import { useTransaction } from "../../hooks/useTransactions"
import { TransactionsTableRow } from "../TransactionsTableRow"
import { Container } from "./styles"

export const TransactionsTable = () => {

    const {transactions} = useTransaction()

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