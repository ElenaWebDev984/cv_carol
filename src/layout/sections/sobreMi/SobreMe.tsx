import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import photo2 from '../../../assets/images/photo2.webp'
import styled from "styled-components";
import {Title} from "../../../components/Title.tsx";
import { Container } from "../../../components/Container.tsx";
import {Subtitle} from "../../../components/Subtitle.tsx";


export const SobreMe = () => {
    return (
        <StyledSobreMe>
            <Container>
                <Title title='Sobre mi' />
                <SobreMeContent>
                    <Photo src={photo2} alt="photo" borderRadius={'10%'}/>
                    <FlexWrapper direction='column' justify="space-around" align={'center'} wrap={'wrap'}>
                        <PerfilList>
                            <li>
                                <Subtitle title='Perfil'/>
                            </li>
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
                        <PerfilList>
                            <li>
                                <Subtitle title='Aficions'/>
                            </li>
                            <li>Viatjar, lectura, cinema, cuinar,natació i caminar per la muntanya.</li>
                        </PerfilList>
                    </FlexWrapper>
                </SobreMeContent>
            </Container>
        </StyledSobreMe>
    );
};

const StyledSobreMe = styled.section`

`

const SobreMeContent = styled.div`
    display: flex;
    gap: 100px;
    justify-content: space-around;
`

const PerfilList = styled.ul`
    li {
        text-align: left;
    }
`

