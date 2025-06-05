import styled from "styled-components";
import {AboutExperience} from "./AboutExperience.tsx";
import {AboutEducation} from "./AboutEducation.tsx";
import {AboutEducationComplementaria} from "./AboutEducationComplementaria.tsx";
import {Perfil} from "./Perfil.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutContent>
                <AboutTitle>Sobre mi</AboutTitle>
                <Perfil/>
                <AboutText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</AboutText>

                <AboutExperience/>
                <AboutEducation/>
                <AboutEducationComplementaria/>
            </AboutContent>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
`

const AboutContent = styled.div`

`

export const AboutTitle = styled.h2`

`

const AboutText = styled.p`

`

