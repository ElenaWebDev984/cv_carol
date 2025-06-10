import styled from "styled-components";
import {SectionSubtitle} from "../../../components/SectionSubtitle.tsx";
import {Skill} from "./Skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const Idiomes = () => {
    return (
        <StyledIdiomesSkills>
            <SectionSubtitle title='Idiomes'/>
            <FlexWrapper wrap='wrap' gap='30px'>
                <Skill iconID='catalan' title='Títol de Català' subtitle='Nivell C' text='Final Batxillerat any 1994'/>
                <Skill iconID='france' title='Títol acadèmic de Llengua Francesa' subtitle='Escola Oficial
                d’Idiomes (EOI) de Tarragona' text='1995'/>
                <Skill iconID='english' title='Anglès' subtitle='Certificat B1' text='Centre UNED – Juny 2024'/>
            </FlexWrapper>

        </StyledIdiomesSkills>
    );
};

const StyledIdiomesSkills = styled.div`
    
`