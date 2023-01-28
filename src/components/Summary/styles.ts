import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
    margin-top: -7rem;
`

export const SummaryBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .9375rem;
    padding: 1.5rem 2rem;
    background: var(--mainShape);
    border-radius: 0.3125rem;
    color: var(--titles);
    box-shadow: 0 0 5px rgba(0,0,0,.2);

    &.highlight {
        background: var(--green);
        color: var(--mainShape);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
    }
`