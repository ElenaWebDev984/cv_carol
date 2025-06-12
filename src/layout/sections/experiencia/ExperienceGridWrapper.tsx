import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type ExperienceGridWrapperTypes = {
    curs: string
    moduls: string
    empresa: string
    hores: string
    dates: string
}


export const ExperienceGridWrapper = ({curs, moduls, empresa, hores, dates}: ExperienceGridWrapperTypes) => {
    return (
        <StyledExperienceGridWrapper>
            <Curs>{curs}</Curs>
            <Moduls>{moduls}</Moduls>
            <Empresa>{empresa}</Empresa>
            <Hores>{hores}</Hores>
            <Dates>{dates}</Dates>
        </StyledExperienceGridWrapper>
    );
};

const StyledExperienceGridWrapper = styled.div`
    font-family: Nunito, sans-serif;
    font-weight: 400;
    font-size: 14px;

    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 50px;
    white-space: pre-line;
    margin-bottom: 50px;
    position: relative;
    
    & > :first-child {
        grid-area: 1/1/2/3;
    }

    & > :nth-child(2) {
        grid-area: 1/3/2/6;
    }

    & > :nth-child(3) {
        grid-area: 1/6/2/8;
    }

    & > :nth-child(4) {
        grid-area: 1/8/2/9;
    }

    & > :last-child {
        grid-area: 1/9/2/10;
    }

    &::after {
        content: '';
        display: inline-block;
        left: 0;
        right: 0;
        bottom: -10px;
        height: 2px;
        background-color: ${theme.colors.secondaryBgc};
        opacity: 30%;
        position: absolute;
    }
`

const Curs = styled.p`

`

const Moduls = styled.p`
    
`

const Empresa = styled.p`

`

const Hores = styled.p`

`

const Dates = styled.p`
  
`