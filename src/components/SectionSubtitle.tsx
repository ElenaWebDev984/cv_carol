import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type SectionSubtitleTypes = {
    title: string
}

export const SectionSubtitle = ({title}: SectionSubtitleTypes) => {
    return <StyledSectionSubtitle>{title}</StyledSectionSubtitle>
};

const StyledSectionSubtitle = styled.h2`
    text-align: left;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 30px;
    color: ${theme.colors.formFont};
`

