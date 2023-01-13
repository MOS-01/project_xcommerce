import { StyledButtonNav } from "./styled"

interface iButtonNav{
    text:string;
    type?:"button" | "submit" | undefined;
    disabled?:boolean;
    onClick?:()=> void;

}
export const ButtonNav = ({
    text,
    type,
    onClick,
    disabled
    } : iButtonNav)=>{
    return(
        <StyledButtonNav disabled={disabled} type={type} onClick={onClick}>
            {text}
        </StyledButtonNav>
    )
}