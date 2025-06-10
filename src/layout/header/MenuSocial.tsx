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
                            <Icon iconId={socialData.iconId}  width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
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
    gap: 20px;
`

export const SocialList = styled.li`
    &:hover {
        transform: translateY(-4px);
    }
`

export const MenuSocialLink = styled.a`

`

