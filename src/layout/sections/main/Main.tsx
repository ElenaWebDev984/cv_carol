import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import {Container} from "../../../components/Container.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <p>Hola a tothom!!!</p>
                        <span>Soc Carol Tarrío Viñuales</span>
                        <p><span>FORMADORA</span> DE CURSOS DE FORMACIÓ OCUPACIONAL I DE CURSOS PER A EMPRESES.</p>
                    </div>

                    <Photo src={photo} alt="photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`

