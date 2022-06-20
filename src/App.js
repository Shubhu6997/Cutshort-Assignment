import { useState } from "react";
import FirstStep from "./components/FirstStep";
import FourthStep from "./components/FourthStep";
import SecondStep from "./components/SecondStep";
import StepProgressBar from "./components/StepsProgressBar";
import ThirdStep from "./components/ThirdStep";
import TitleLogo from "./img/TitleLogo.png";
import "./css/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  const [useFor, setUseFor] = useState("");

  const handleStep = (value) =>{
    setStep(value);
  }
  const handleProgress = (value) =>{
    setProgress(value);
  }

  return (
    <div className="container">
      <div className="title-container">
        <div>
          <img src={TitleLogo} alt = "Title Logo" width="40px" height="40px"/>
        </div>
        <div>
          <h2>Eden</h2>
        </div> 
      </div>
      <div>
        <StepProgressBar progress = {progress} handleProgress = {handleProgress}/>
      </div>
      {(()=>{switch(step){
            case 1 : 
                      return <FirstStep 
                              handleStep = {handleStep} 
                              progress = {progress} 
                              handleProgress = {handleProgress}
                              fullName = {fullName}
                              setFullName = {setFullName}
                              displayName = {displayName}
                              setDisplayName = {setDisplayName}/>

            case 2 :
                      return <SecondStep 
                              handleStep = {handleStep} 
                              progress = {progress} 
                              handleProgress = {handleProgress}
                              workspaceName = {workspaceName}
                              setWorkspaceName = {setWorkspaceName}
                              workspaceURL = {workspaceURL}
                              setWorkspaceURL = {setWorkspaceURL}/>

            case 3 : 
                      return <ThirdStep 
                              handleStep = {handleStep} 
                              progress = {progress} 
                              handleProgress = {handleProgress}
                              useFor = {useFor}
                              setUseFor = {setUseFor}/>

            case 4 : 
                      return <FourthStep 
                              handleStep = {handleStep} 
                              progress = {progress} 
                              handleProgress = {handleProgress}
                              displayName = {displayName}/>

            default : return <></>

        }})()
      }
    </div>
  );
}

export default App;
