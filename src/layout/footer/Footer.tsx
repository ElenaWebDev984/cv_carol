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
                            <Icon iconId='phone' viewBox='-14 -14 50 50'/>
                            619847748
                        </li>
                        <li>
                            <Icon iconId='email' viewBox='-14 -14 50 50'/>
                            carol.tarrio.profe@hotmail.com
                        </li>
                        <li>
                            <Icon iconId='location' viewBox='-14 -14 50 50'/>
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
    padding: 30px 0;
`

const Location = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    
    li {
        display: flex;
        align-items: center;
        color: ${theme.colors.headerFooterIconsFont};
    }
`

const Copyright = styled.p`
    line-height: 1.4;
    color: ${theme.colors.testimonyTextFont};
    margin-bottom: 10px;

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



// TODO
//     <SocialList>
//         <MenuSocialLink href='tel:619847748' target='_blank'>
//              <Icon iconId='phone'  width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
//          </MenuSocialLink>
//          619847748
//      </SocialList>
//      <SocialList>
//          <MenuSocialLink href='mailto:carol.tarrio.profe@hotmail.com' target='_blank'>
//              <Icon iconId='email'  width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
//          </MenuSocialLink>
//          carol.tarrio.profe@hotmail.com
//      </SocialList>
//      <SocialList>
//          <MenuSocialLink href='#' target='_blank'>
//              <Icon iconId='location'/>
//          </MenuSocialLink>
//          43850 – Cambrils
//      </SocialList>

