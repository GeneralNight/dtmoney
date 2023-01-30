import { DepositType, TransactionsTableRowProps } from "../../types/"
import { TableRow } from "./style"

export const TransactionsTableRow = (props: TransactionsTableRowProps) => {
    const {transaction} = props
    return (
        <TableRow>
            <td>{transaction.title}</td>
            <td className={transaction.type}>{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(transaction.type === DepositType.DEPOSIT ? transaction.value : transaction.value * -1)
            }</td>
            <td>{transaction.category}</td>
            <td>{
                new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
            }</td>
        </TableRow>
    )
}