const Features= (props) => {
    return(
        <div className="features">
            <div className="features-img-container">
                <img src={props.src}/>
            </div>
            <h5>{props.title}</h5>
        </div>
    )
}
export default Features;