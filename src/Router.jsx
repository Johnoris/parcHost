import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home"
import AfterSignup from "./components/after-signup/afterSignup";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="after-signup" element={<AfterSignup/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;