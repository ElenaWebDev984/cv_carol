import photo from '../../../assets/images/photo.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <p>Hola a tothom!!!</p>
                    <span>Soc Carol Tarrío Viñuales</span>
                    <p><span>FORMADORA</span> DE CURSOS DE FORMACIÓ OCUPACIONAL I DE CURSOS PER A EMPRESES.</p>
                </div>

                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff;
`

const Photo = styled.img`
    width: 430px;
    height: 540px;
    border-radius: 10%;
    object-fit: cover;
`

