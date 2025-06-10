import styled from "styled-components";

type SectionTitleTypes = {
    title: string
}

export const SectionTitle = ({title}: SectionTitleTypes) => {
    return <StyledSectionTitle>{title}</StyledSectionTitle>
};

const StyledSectionTitle = styled.h2`
    text-align: center;
`

