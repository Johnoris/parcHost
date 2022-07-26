import React from "react";


const Nav = () => {
    return(
        <nav>
            <div>
                <img className="w-22 h-20" src={require("../../assets/images/mail-icon.png")}/>
                <h4>+234 802 301 3910</h4>
            </div>
            <div>
                <img  className="w-29 h-20" src={require("../../assets/images/tel-icon.png")}/>
                <h4>hello@parchost.com</h4>
            </div>
        </nav>
    )
}
export default Nav;