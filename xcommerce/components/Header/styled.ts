import styled from "styled-components";

export const StyledHeader = styled.header`
    width:100%;
    height:50px;
    background-color:var(--color-primary-1);

    display:flex;
    align-items: center;
    justify-content:space-between;

    padding:1rem;
    border-bottom: 1px solid var(--color-grey-1);

    div{
        display:flex;
        align-items:center;
    }
    h1{
        font-size:20px;
        font-weight:700px;
        color:var(--color-grey-4);
        text-align:center;
    }

    strong{
        font-size:20px;
        font-weight:700px;
        color:var(--color-icon);
    }
    section{
        display: flex;
        align-items:center;
        gap:5px;
    }
    button{
        background-color:var(--color-primary-1)
    }

`