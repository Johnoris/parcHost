import { useState } from "react";
import GetInTouch from "../pop-ups/sign-up-complete";
import { Link, useNavigate } from "react-router-dom";


const Form = () => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const handleModal = () => {
        setModal(true);
    }
    return(
        <div className="align-center">
            <div className="before"></div>
            <div className="form-wrapper">
                {modal&&<GetInTouch text="Thanks for signing up. Kindly check your email for our Brochure."/>}
                <div className="form pdx-120 pdt-55">
                    <div>
                        <img src={require("../../assets/images/parchost-logo.png")} alt="logo"/>
                    </div>
                    <div className="f-left">
                        <h2>Allow your customers recieve  packages at secure hub locations</h2>
                        <h4>CHEAP FOR BUSINESSES | CONVENIENT FOR CUSTOMERS</h4>                        
                        <form>
                            <input type="text" placeholder="Company Name"/>
                            <input type="text" placeholder="Company Location"/>
                            <input type="text" placeholder="Contact Name"/>
                            <input type="text" placeholder="Contact Email"/>
                            <Link to=""><button onClick={handleModal} type="submit">Sign me Up!</button></Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Form;