
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"
import { TransactionsTableRow } from "../TransactionsTableRow"
import { Container } from "./styles"

export const TransactionsTable = () => {

    const {transactions} = useContext(TransactionsContext)

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