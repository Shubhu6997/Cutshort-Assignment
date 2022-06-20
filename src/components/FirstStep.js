import "../css/Common.css";
import "../css/FirstStep.css";
const FirstStep = (props) =>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.handleStep(2); 
        props.handleProgress(props.progress + 25)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="main-title">
                        <h2>Welcome! First things first...</h2>
                    </div>
                    <div className="sub-title">
                        <p>You can always change them later</p>
                    </div>  
                </div>
                <div className="field-container">
                    <div className="first-field-title">
                        <p>Full Name</p>
                    </div>
                    <div>
                        <input 
                        className="inputField"
                        type="text"
                        placeholder="Steve Jobs"
                        value={props.fullName}
                        onChange={(e)=>props.setFullName(e.target.value)}
                        required/>
                    </div>
                    <div className="second-field-title">
                        <p>Display Name</p>
                    </div>
                    <div>
                        <input
                        className="inputField"
                        type="text"
                        placeholder="Steve"
                        value={props.displayName}
                        onChange={(e)=>props.setDisplayName(e.target.value)}
                        required/>
                    </div>
                    <div className="btn-container">
                        <button 
                        type="submit"
                        className="step-btn">Create Workspace</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FirstStep;