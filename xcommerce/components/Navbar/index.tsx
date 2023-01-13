import { ButtonNav } from "../Buttons/ButtonNav"
import { Input } from "../Input"
import { StyledNavbar, StyledSectionButton } from "./styled"

export const Navbar = ()=>{

    return(
      <StyledNavbar>
        <section>
            <h3>Produtos</h3>
            <Input type="text" placeholder='Buscar por produtos'></Input>
        </section>
        <StyledSectionButton>
            <div>
                <ButtonNav text={"Todas"} onClick={()=> console.log('Todas')}/>
                <ButtonNav text={"Favoritos"} onClick={()=> console.log('Favoritos')} />
            </div>
            <ButtonNav text={"Criar novo"} onClick={()=> console.log('Criar novo')} />
        </StyledSectionButton>
      </StyledNavbar>
    )
}