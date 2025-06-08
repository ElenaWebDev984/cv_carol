import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import photo2 from '../../../assets/images/photo2.webp'
import styled from "styled-components";
import {Title} from "../../../components/Title.tsx";
import { Container } from "../../../components/Container.tsx";


export const Perfil = () => {
    return (
        <StyledPerfil>
            <Container>
                <Title title='Perfil' />
                <FlexWrapper justify="space-around" align={'center'} wrap={'wrap'}>
                    <Photo src={photo2} alt="photo" borderRadius={'10%'}/>
                    <PerfilList>
                        <li>Actitud responsable i resolutiva.</li>
                        <li>Habilitats interpersonals.</li>
                        <li>Interès pel desenvolupament professional.</li>
                        <li>Flexibilitat</li>
                        <li>Facilitat d’adaptació al canvi.</li>
                        <li>Persona proactiva i dinàmica.</li>
                        <li>Persona oberta i optimista amb facilitat per a contagiar l’entusiasme.</li>
                        <li>Persona formal i compromesa amb el lloc de feina i l’empresa.</li>
                        <li>Nivell avançat d’office.</li>
                        <li>Disseny de cursos.</li>
                        <li>Experiència a les aules.</li>
                    </PerfilList>
                </FlexWrapper>
            </Container>
        </StyledPerfil>
    );
};

const StyledPerfil = styled.section`

`

const PerfilList = styled.ul`
    li {
        text-align: left;
    }
`

