import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {menuItems} from "../../data/menu/menuData.ts";


export const Header = () => {
    return (
        <StyledHeader>
           <Container>
               <FlexWrapper justify="space-between" align='center'>
                   <Logo/>
                   <Menu menuItems={menuItems}/>
               </FlexWrapper>
           </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.accentColor};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

