import styled from "styled-components";

type TitleTypes = {
    title: string
}

export const Title = ({title}: TitleTypes) => {
    return <StyledTitle>{title}</StyledTitle>
};

const StyledTitle = styled.h2`
    text-align: center;
`

