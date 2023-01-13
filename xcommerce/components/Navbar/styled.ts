import styled from "styled-components";

export const StyledNavbar = styled.nav`
    height:180px;
    background-color:var(--color-primary-1);

    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    gap:2rem;

    padding:1rem;


    section{
        height:90px;
        color:var(--color-grey-4);

        font-size:25px;
        font-weight:700;

        border-bottom: 1px solid var(--color-grey-1)
    }
    
`

export const StyledSectionButton = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;

    div{
        display:flex;
        gap:1rem;
    }

`