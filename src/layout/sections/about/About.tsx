import styled from "styled-components";
import {AboutExperience} from "./AboutExperience.tsx";
import {ExperienceGridWrapper} from "./ExperienceGridWrapper.tsx";
import {AboutEducation} from "./AboutEducation.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutContent>
                <AboutTitle>Sobre mi</AboutTitle>
                <AboutText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</AboutText>

                <AboutExperience/>
                <AboutEducation/>

                <AboutTitle>Formació Compementària</AboutTitle>
                <ExperienceGridWrapper curs={""} moduls={""} empresa={""} hores={""} dates={""}/>
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

