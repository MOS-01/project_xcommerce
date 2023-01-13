import Image from 'next/image';
import { StyledHeader } from './styled';
import Avatar from  '../../imgs/Avatar.svg';
import Icon from  '../../imgs/icon.svg';

export const Header = ()=>{
    return(
        <StyledHeader>
            <div>
                <h1>XCO
                    <strong>+</strong>
                </h1>
            </div>
            <section>
                <figure>
                    <Image src={Avatar} alt="avatar usuário" />
                </figure>
                <button onClick={()=> console.log('sanduiche')}>
                    <Image src={Icon} alt="mais opções"/>
                </button>
            </section>
            
        </StyledHeader>
    )
}