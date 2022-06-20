import "../css/Common.css";
import "../css/SecondStep.css";
const SecondStep = (props) =>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.handleStep(3); 
        props.handleProgress(props.progress + 25);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="main-title">
                    <h2>Let's set up home for all your work</h2>
                </div>
                <div className="sub-title">
                    <p>You can always create another workspace later.</p>
                </div> 
                <div className="field-container">
                    <div className="first-field-title">
                        <p>Workspace Name</p>
                    </div>
                    <div>
                        <input 
                        type="text"
                        className="inputField"
                        value={props.workspaceName}
                        onChange={(e)=>props.setWorkspaceName(e.target.value)}
                        required/>
                    </div>
                    <div className="second-field-title">
                        <p>Workspace URL<label>(optional)</label></p>
                    </div>
                    <div className="url-field-container">
                        <div>
                            <input
                             className="url-field"
                             value="www.eden.com/"
                             disabled/>
                        </div>
                        <div>
                            <input 
                            type="url"
                            className="url-input"
                            value={props.workspaceURL}
                            onChange={(e)=>props.setWorkspaceURL(e.target.value)}
                            required/>
                        </div>
                    </div>
                </div>     
                <div className="btn-container">
                    <button className="step-btn"
                    type="submit"
                    >Create Workspace</button>
                </div>   
            </form>       
        </div>
    )
}

export default SecondStep;