import styled from "styled-components";
import {AboutGridWrapper} from "./AboutGridWrapper.tsx";
import {AboutExperience} from "./AboutExperience.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutContent>
                <AboutTitle>Sobre mi</AboutTitle>
                <AboutText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</AboutText>

                <AboutExperience/>

                <AboutTitle>Formació Acadèmica</AboutTitle>
                <AboutGridWrapper curs={""} moduls={""} empresa={""} hores={""} dates={""}/>
                <AboutTitle>Formació Compementària</AboutTitle>
                <AboutGridWrapper curs={""} moduls={""} empresa={""} hores={""} dates={""}/>
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

