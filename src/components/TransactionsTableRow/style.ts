import styled from "styled-components";

export const TableRow = styled.tr`
    td {
            
            padding: 1rem 2rem;
            border: 0;
            background: var(--mainShape);
            border-radius: 0.25rem;
            color: var(--texts);

            &:first-child {
                color: var(--titles);
            }

            &.withdraw {
                color: var(--red);
            }

            &.deposit {
                color: var(--green);
            }

            &.action {
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 500;
                    font-size: 1.15rem;
                    border-radius: 0.25rem;
                    background: var(--red);
                    padding: 0.25rem 0.75rem;
                    color: var(--mainShape);
                    border: none;

                    transition: .2s;
                    
                    &:hover {
                        box-shadow: 0 0 3px rgba(0,0,0,0.25);
                        filter: brightness(.95)
                    }
                }
            }
        }
`