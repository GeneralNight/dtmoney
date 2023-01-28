import { TransactionsTableRowProps } from "../../types/"
import { TableRow } from "./style"

export const TransactionsTableRow = (props: TransactionsTableRowProps) => {
    const {transaction} = props
    return (
        <TableRow>
            <td>{transaction.title}</td>
            <td className={transaction.type}>{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(transaction.value)
            }</td>
            <td>{transaction.category}</td>
            <td>{
                new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
            }</td>
        </TableRow>
    )
}