import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Perfil} from "./layout/sections/perfil/Perfil.tsx";
import {Experiencia} from "./layout/sections/experiencia/Experiencia.tsx";



export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Perfil/>
            <Experiencia/>
            {/*<Treball/>*/}
            {/*<Formació/>*/}
            {/*<Aficions/>*/}
            {/*<Testimony/>*/}
            {/*<Contacte/>*/}
            <Footer/>
        </div>
    )
}



