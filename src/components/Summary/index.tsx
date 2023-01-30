import { Container, SummaryBox } from "./styles"
import entryImg from '../../assets/entry.svg'
import exitsImg from '../../assets/exits.svg'
import currencyImg from '../../assets/currency.svg'
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"
import { DepositType } from "../../types"

export const Summary = () => {

    const {transactions} = useContext(TransactionsContext)
    const entries = transactions.filter(t=>t.type===DepositType.DEPOSIT).reduce((counter,val) => counter + val.value,0)
    const exits = transactions.filter(t=>t.type===DepositType.WITHDRAW).reduce((counter,val) => counter + val.value,0) * -1
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
                        }).format(entries)
                    }
                </strong>
            </SummaryBox>
            <SummaryBox>
                <header>
                    <p>Saídas</p>
                    <img src={exitsImg} alt="Saídas" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(exits)
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
                        }).format(entries + exits)
                    }
                </strong>
            </SummaryBox>
        </Container>
    )
}