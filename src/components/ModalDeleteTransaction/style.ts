import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }

    .buttonsBox {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        

        button {
            border: none;
            color: var(--mainShape);
            border-radius: 0.25rem;
            padding: 0.75rem 1.25rem;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
            transition: .2s;

            &:hover {
                filter: brightness(.95)
            }
            
            &.confirm {
                background: var(--green)
            }
            
            &.cancel {
                background: var(--red)
            }
        }
    }
`