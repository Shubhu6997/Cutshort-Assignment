import "../css/Common.css";
import "../css/FourthStep.css";
import TickMark from "../img/TickMark.png";
const FourthStep = (props) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Eden Launched Successfully!!!")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="tickmark-container">
                    <img src={TickMark} alt="TickMark" width="80px" height = "80px"/>
                </div>
                <div className="main-title">
                    <h2>Congratulations, {props.displayName}!</h2>
                </div>
                <div className="sub-title">
                    <p>You have completed onboarding, you can start using Eden!</p>
                </div>
                <div className="btn-container">
                    <button 
                    type="submit"
                    className="step-btn"
                    >Launch Eden</button>
                </div>
            </form>
        </div>
    )
}

export default FourthStep;