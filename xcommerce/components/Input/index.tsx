import { StyledInput } from "./styled";

interface iInput{
    type:string;
    placeholder: string;
}

export const Input = ({type,placeholder} : iInput)=>{
    return(
        <StyledInput type="text" placeholder={placeholder} />
    )
}