import "../css/Common.css";
import "../css/ThirdStep.css";
import SelfImage from "../img/SelfImage.png";
import TeamImage from "../img/TeamImage.png";
const ThirdStep = (props) =>{
    return(
        <div>
            <div className="main-title">
                <h2>How are you planning to use Eden?</h2>
            </div>
            <div className="sub-title">
                <p>We'll steamline your setup experince accordingly.</p>
            </div>
            <div>
                <div className="selection-container">
                    <button className="self-container" >
                        <div>
                            <img src = {SelfImage} alt = "Self" width = "35px" height = "30px"/>
                        </div>
                        <div>
                            <h3>For Myself</h3>
                            <p>Write better. Think More clearly. Stay organized.</p>
                        </div>       
                    </button>
                    <button className="team-container">
                        <div>
                            <img src = {TeamImage} alt = "Team" width = "35px" height = "30px"/>
                        </div>
                        <div>
                            <h3>With my team</h3>
                            <p>Wikis, docs, tasks & projects, all in one place.</p>
                        </div>
                    </button>
                </div>
            
                <div className="btn-container">
                    <button className="step-btn"
                        onClick={()=>{props.handleStep(4); props.handleProgress(props.progress + 25)}}>Create Workspace</button>
                </div>
            </div>

        </div>
    )
}

export default ThirdStep;