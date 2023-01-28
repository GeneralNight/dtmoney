import styled from "styled-components";
import {darken} from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--texts)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        border: none;
        color: var(--mainShape);
        font-size: 1rem;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
        transition: .2s;
        font-weight: 600;
        &:hover {
            filter: brightness(.9)
        }
    }
`

export const TransactionTypeBox = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    gap: 0.5rem;
    margin: 1rem 0;

    
`

type RadioBoxProps = {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`

    width: 100%;
    border: 1px solid var(--texts);
    border-radius: 0.25rem;
    height: 4rem;
    background: ${(props) =>  props.isActive ? props.activeColor : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    transition: .2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }
    

    img {
        width: 20px;
        height: 20px;
    }

    span {
        color: var(--titles);
        font-size: 1rem;
        display: inline-block;
        margin-left: 1rem;
    }
    

`