import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FormacioUni} from "./FormacioUni.tsx";
import {FormacioComplementaria} from "./FormacioComplementaria.tsx";
import {Title} from "../../../components/Title.tsx";
import {Idiomes} from "./Idiomes.tsx";
import {Informatica} from "./Informatica.tsx";


export const Formacio = () => {
    return (
        <StyledFormacio>
            <Container>
                <Title title='Formació' />
                <FormacioUni/>
                <FormacioComplementaria/>
                <Idiomes/>
                <Informatica/>
            </Container>
        </StyledFormacio>
    );
};

const StyledFormacio = styled.section`

`