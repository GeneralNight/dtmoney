import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

type HeaderProps = {
    onRequestOpen: () => void;
}

export const Header = ({onRequestOpen}:HeaderProps) => {

    

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onRequestOpen}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}