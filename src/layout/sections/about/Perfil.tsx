import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import photo2 from './../../../assets/images/photo2.jpg'


export const Perfil = () => {
    return (
       <FlexWrapper>
           <Photo src={photo2} alt="photo"/>
           <ul>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
       </FlexWrapper>
    );
};

