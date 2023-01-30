import ReactModal from "react-modal";
import { Container } from "./style";
import closeImg from '../../assets/close.svg'
import { useTransaction } from "../../hooks/useTransactions";
type ModalDeleteTransactionProps = {
    isOpen: boolean;
    closeModal: () => void;
}

export function ModalDeleteTransaction({isOpen,closeModal}:ModalDeleteTransactionProps) {

    const {transactions,transactionToDelete,deleteTransaction} = useTransaction()

    return (
        <ReactModal 
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <Container>
                <button onClick={closeModal} type="button" className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <span>Deseja deletar o lançamento "{transactions.find(t=>t.id===transactionToDelete)?.title}"?</span>
                <div className="buttonsBox">
                    <button className="cancel" onClick={() => closeModal()}>Cancelar</button>
                    <button className="confirm" onClick={() => deleteTransaction()}>Confirmar</button>
                </div>
            </Container>
        </ReactModal>
    )
}