import styled from "styled-components";
import {Image} from "../../../components/Image.tsx";
import {theme} from "../../../styles/Theme.ts";

type WorkTypes = {
    src: string
    alt: string
    text: string
}


export const Work = ({src, alt, text}: WorkTypes) => {
    return (
        <StyledWork>
            <Image src={src} alt={alt} objectFit='content'/>
            <WorkText>{text}</WorkText>
        </StyledWork>
    );
};

const StyledWork = styled.article`
    background-color: ${theme.colors.secondaryBgc};
    padding: 5px;
    border-radius: 20px;
    width: 30%;
    flex-grow: 1;
    
    ${Image} {
        width: 100%;
    }
`

const WorkText = styled.p`

`