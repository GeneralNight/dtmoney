import { Container, SummaryBox } from "./styles"
import entryImg from '../../assets/entry.svg'
import exitsImg from '../../assets/exits.svg'
import currencyImg from '../../assets/currency.svg'

export const Summary = () => {
    return (
        <Container>
            <SummaryBox>
                <header>
                    <p>Entradas</p>
                    <img src={entryImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryBox>
            <SummaryBox>
                <header>
                    <p>Saídas</p>
                    <img src={exitsImg} alt="Saídas" />
                </header>
                <strong>- R$ 500,00</strong>
            </SummaryBox>
            <SummaryBox className="highlight">
                <header>
                    <p>Total</p>
                    <img src={currencyImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </SummaryBox>
        </Container>
    )
}