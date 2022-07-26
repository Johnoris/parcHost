const GetInTouch = (props) => {
    return(
        <div className="GetInTouch">
            <img src={require("../../assets/images/success-logo.png")} alt="Success"/>
            <h3>{props.text}</h3>
        </div>
    )
}
export default GetInTouch;