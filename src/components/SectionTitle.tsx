import styled from "styled-components";

type SectionTitleTypes = {
    title: string
}

export const SectionTitle = ({title}: SectionTitleTypes) => {
    return <StyledSectionTitle>{title}</StyledSectionTitle>
};

const StyledSectionTitle = styled.h2`
    text-align: center;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 70px;
`

