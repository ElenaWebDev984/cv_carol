import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type ButtonTypes = {
    text: string
}

export const Button = ({text}: ButtonTypes) => {
    return <StyledButton>{text}</StyledButton>
};

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    background: ${theme.colors.accentColor};
    width: 220px;
    height: 65px;
    border-radius: 18px;
    padding: 20px 60px;
    margin-top: 30px;

    color: ${theme.colors.headerFooterIconsFont};
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;

    &:hover {
        background: ${theme.colors.headerFooterIconsFont};
        border: 3px solid ${theme.colors.accentColor};
        color: ${theme.colors.accentColor};
        font-weight: 600;
        box-shadow: 20px 0 80px ${theme.colors.secondaryBgc}, -20px 0 80px ${theme.colors.secondaryBgc};
        transform: translateY(-4px);
    }
`