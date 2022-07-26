import Nav from "../nav/nav"
import Footer from "../footer/footer"

const AfterSignup = () => {
    return(
        <div className="after-signup">
            <Nav/>
            <div className="after-signup-top">
                <div className="justify-center">
                    <img src={require("../../assets/images/parchost-logo.png")} alt="logo"/>
                </div>
                <div className="f-left pdl-148 align-flex-end">
                    <h2>Automate pickup of documents, parcels, Cheque books, ATM cards and more</h2>
                    <button href="#">Get Started</button>
                </div>
            </div>
            <div className="case-study">
                <h3>The ParcHost Case Study</h3>
                <p>Banks and Visa collection services have a common challenge. Very long queues. Nobody likes queues. With COVID-19, avoiding crowded indoors has become more critical for both customers and service agents.</p>
                <p>Banks have made a lot of progress with reducing crowds in locations. Internet banking and Automated Teller Machines mean customers can perform transactions from outside the banking hall.</p>
                <div className="d-flex case-study-img-container">
                    <div>
                        <p>Because of regulatory issues, some activities still need to be performed in person. There’s one that doesn’t have to though - the pickup of “personal banking tools” like ATM cards, cheque books, etc.</p>
                        <p>Our team is attempting to use self-serve machines (combined with some human verification where required) to help customers access these banking tools with  ease and in a safe and convenient manner</p>
                    </div>
                    <div>
                        <img src={require("../../assets/images/case-study-img.png")} alt="self-serv machines"/>
                    </div>
                </div>
            </div>
            <div className="getting-started">
                <h4>Let’s get started</h4>
                <p>We would send you a brochure.</p>
                <form>
                    <input type="text" placeholder="Company Name"/>
                    <input type="text" placeholder="Company Location"/>
                    <input type="text" placeholder="Contact Name"/>
                    <input type="text" placeholder="Contact Email"/>
                    <button type="submit">Sign me Up!</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default AfterSignup;