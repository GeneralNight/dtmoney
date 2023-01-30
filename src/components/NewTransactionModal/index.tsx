import { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal"
import { TransactionsContext } from "../../TransactionsContext";

import closeImg from '../../assets/close.svg'
import entryImg from '../../assets/entry.svg'
import exitsImg from '../../assets/exits.svg'


import { Container, RadioBox, TransactionTypeBox } from "./style";
import { DepositType, TransactionInput } from "../../types";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;

}

export const NewTransactionModal = ({isOpen,onRequestClose}:NewTransactionModalProps) => {
    const {createTransaction} = useContext(TransactionsContext)

    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category,setCategory] = useState('')
    const [type,setType] = useState<DepositType>(DepositType.DEPOSIT)

    const handleCreateNewTransaction = async (event:FormEvent) => {
        event.preventDefault();

        const data: TransactionInput = {
            title,
            value,
            type,
            category
        }

        
        await createTransaction(data)
        onRequestClose()
        cleanTransaction()       
        
    }

    const cleanTransaction = () => {
        setTitle('')
        setValue(0)
        setCategory('')
        setType(DepositType.DEPOSIT)
    }



    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
                
            <Container onSubmit={handleCreateNewTransaction}>
                <button onClick={onRequestClose} type="button" className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Título" value={title} onChange={event=>setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={value} onChange={event=>setValue(Number(event.target.value))}/>
                <TransactionTypeBox>
                    <RadioBox
                        type="button"
                        onClick={()=>setType(DepositType.DEPOSIT)}
                        isActive={type==='deposit'}
                        activeColor='#12A45430'
                    >
                        <img src={entryImg} alt="entry" />
                        <span>
                            Entrada
                        </span> 
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type==='withdraw'}
                        onClick={()=>setType(DepositType.WITHDRAW)}
                        activeColor='#E52E4D30'
                    >
                        <img src={exitsImg} alt="withdraw" />
                        <span>
                            Saída
                        </span>
                    </RadioBox>
                </TransactionTypeBox>
                <input type="text" placeholder="Categoria" value={category} onChange={event=>setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
        </ReactModal>
    )
}