import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">Portada</a>
                </li>
                <li>
                    <a href="#">Sobre mi</a>
                </li>
                <li>
                    <a href="#">Habilitats</a>
                </li>
                <li>
                    <a href="#">Treball</a>
                </li>
                <li>
                    <a href="#">Aficions</a>
                </li>
                <li>
                    <a href="#">Contacte</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

