import styled from "styled-components";
import {socialData} from "../../data/social/socialData.ts";
import {Icon} from "../../components/icon/Icon.tsx";



export const MenuSocial = () => {
    return (
        <StyledMenuSocial>
            {socialData.map((socialData, index) => {
                return (
                    <SocialList key={index}>
                        <MenuSocialLink href={socialData.href} target={socialData.target}>
                            <Icon iconId={socialData.iconId}  width={'30'} height={'30'} viewBox={'-5 -8 33 33'}/>
                        </MenuSocialLink>
                    </SocialList>
                )
            })}
        </StyledMenuSocial>
    );
};

const StyledMenuSocial = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 20px 0;
`

export const SocialList = styled.li`
    
`

export const MenuSocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        transform: translateY(-4px);
        background-color: rgba(254, 197, 206, 0.2);
        border-radius: 50%;
        width: 35px;
        height: 38px;

    }
`

