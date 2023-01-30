import { Container, SummaryBox } from "./styles"
import entryImg from '../../assets/entry.svg'
import exitsImg from '../../assets/exits.svg'
import currencyImg from '../../assets/currency.svg'
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"
import { DepositType } from "../../types"

export const Summary = () => {

    const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce((acc,transaction) => {

        if(transaction.type===DepositType.DEPOSIT) {
            acc.deposit += transaction.value
            acc.total += transaction.value
        }else {
            acc.withdraws += transaction.value
            acc.total -= transaction.value
        }

        return acc
    },{
        deposit: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <SummaryBox>
                <header>
                    <p>Entradas</p>
                    <img src={entryImg} alt="Entradas" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.deposit)
                    }
                </strong>
            </SummaryBox>
            <SummaryBox>
                <header>
                    <p>Saídas</p>
                    <img src={exitsImg} alt="Saídas" />
                </header>
                <strong>-
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.withdraws)
                    }
                </strong>
            </SummaryBox>
            <SummaryBox className="highlight">
                <header>
                    <p>Total</p>
                    <img src={currencyImg} alt="Total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.total)
                    }
                </strong>
            </SummaryBox>
        </Container>
    )
}