import styled from "styled-components";
import {socialData} from "../../data/socialData.ts";
import {Icon} from "../../components/icon/Icon.tsx";


export const MenuSocial = () => {
    return (
        <StyledMenuSocial>
            {socialData.map((socialData, index) => {
                return (
                    <SocialList key={index}>
                        <MenuSocialLink href={socialData.href} target={socialData.target}>
                            <Icon iconId={socialData.iconId}  width={'30'} height={'30'} viewBox={'0 0 34 30'}/>
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

const SocialList = styled.li`
    &:hover {
        transform: translateY(-4px);
    }
`

const MenuSocialLink = styled.a`

`

