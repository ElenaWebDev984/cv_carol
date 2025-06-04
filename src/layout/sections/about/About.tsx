import styled from "styled-components";
import {AboutGridWrapper} from "./AboutGridWrapper.tsx";


export const About = () => {
    return (
        <StyledAbout>
            <AboutContent>
                <AboutTitle>Sobre mi</AboutTitle>
                <AboutText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</AboutText>
                <AboutTitle>Experiència Laboral</AboutTitle>
                <AboutGridWrapper curs='Actualment impartint (SSCE0110) DOCÈNCIA DE LA FORMACIÓ PROFESSIONAL PER A L’OCUPACIÓ' moduls='Certificat de professionalitat del SOC – FOAP:
                - MF1442_3 Programació didàctica d&#39; accions formativesper a l&#39;ocupació
                - MF1444_3 Impartició i tutorització d&#39;accions formatives per a l&#39;ocupació
                - MF1446_3 Orientació laboral i promoció de la qualitat en la formació professional per a l&#39;ocupació' empresa='Centre de Formació Aptos – Inserció i servei' hores='190 hores' dates='Des d’abril fins a juny de 2025'/>
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

const AboutTitle = styled.h2`

`

const AboutText = styled.p`

`

