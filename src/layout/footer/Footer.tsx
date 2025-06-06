import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Copyright>© 2025 Dissenyat i construït per <span>Elena Badalova</span> amb <span>Amor</span> & <span>Cafè</span></Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.accentColor};
`

const Copyright = styled.p`
   //font-weight: bold;
    line-height: 1.4;
    color: ${theme.colors.testimonyTextFont};

    span {
        background: ${theme.colors.linearGradientFont};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
        font-weight: bold;
    }
`

