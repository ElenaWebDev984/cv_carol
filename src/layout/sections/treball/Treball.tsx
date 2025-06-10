import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./Work.tsx";
import work1 from '../../../assets/images/work1.png'
import work2 from '../../../assets/images/work2.png'
import work3 from '../../../assets/images/work3.png'
import work4 from '../../../assets/images/work4.png'
import work5 from '../../../assets/images/work5.png'
import work6 from '../../../assets/images/work6.png'


export const Treball = () => {
    return (
        <StyledTreball>
            <Container>
                <SectionTitle title='Treball'/>
                <FlexWrapper wrap='wrap' gap='20px'>
                    <Work src={work1} alt='work1' text=''/>
                    <Work src={work2} alt='work2' text=''/>
                    <Work src={work3} alt='work3' text=''/>
                    <Work src={work4} alt='work4' text=''/>
                    <Work src={work5} alt='work5' text=''/>
                    <Work src={work6} alt='work6' text=''/>
                </FlexWrapper>
            </Container>
        </StyledTreball>
    );
};

const StyledTreball = styled.section`

`

