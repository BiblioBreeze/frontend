import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout.tsx";
import {NotFound} from "./pages/NotFound.tsx";
import {Register} from "./pages/Register.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*<Route index element={<Home />} />*/}
                    <Route path="register" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
