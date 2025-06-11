import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
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

const Mask = styled.tspan`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid darkviolet;
    color: ${theme.colors.headerFooterIconsFont};
//    secondaryBgc
    
    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.headerFooterIconsFont};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scaleX(0);
    }

    &:hover {
        &::before {
            transform: scaleX(1);
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(-5px);
            color: ${theme.colors.testimonyTextFont};

            & + ${Mask} {
                transform: skewX(12deg) translateX(5px);
            }
        }


    }
`

const Link = styled.a`
    font-weight: 400;
    font-size: 24px;
    color: transparent;
`