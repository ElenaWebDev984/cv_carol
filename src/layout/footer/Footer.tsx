import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.tsx";
import {MenuSocial} from "../header/MenuSocial.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align='center'>
                    <Location>
                        <li>
                            <Icon iconId='phone'/>
                            619847748
                        </li>
                        <li>
                            <Icon iconId='email'/>
                            carol.tarrio.profe@hotmail.com
                        </li>
                        <li>
                            <Icon iconId='location'/>
                            43850 – Cambrils
                        </li>
                    </Location>
                    <MenuSocial/>
                    <Copyright>© 2025 Dissenyat i construït per <span>Elena Badalova</span> amb <span>Amor</span> & <span>Cafè</span></Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.accentColor};
`

const Location = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    
    li {
        display: flex;
        text-align: center;
    }
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

