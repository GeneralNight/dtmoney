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
        }
`