import {createRoot} from 'react-dom/client'
import {App} from './App.tsx'
import {GlobalStyle} from "./styles/Global.styled.ts";
import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>
)
