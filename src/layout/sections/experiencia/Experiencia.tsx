import styled from "styled-components";
import {ExperienciaLaboral} from "./ExperienciaLaboral.tsx";
import {Container} from "../../../components/Container.tsx";
import {Title} from "../../../components/Title.tsx";


export const Experiencia = () => {
    return (
        <StyledExperiencia>
            <Container>
                <ExperienciaContent>
                    <Title title='Experiència Laboral' />
                    <ExperienciaText>Des del 2016 i fins l’actualitat, imparteixo cursos de formació ocupacional adreçats a persones en atur de totes les edats i cursos a empreses, per a treballadors en actiu:</ExperienciaText>
                    <ExperienciaLaboral/>
                </ExperienciaContent>
            </Container>
        </StyledExperiencia>
    );
};

const StyledExperiencia = styled.section`
    min-height: 100vh;
`

const ExperienciaContent = styled.div`

`

const ExperienciaText = styled.p`

`

