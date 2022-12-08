import React, {useState} from "react";
import MakeQuiz from "./MakeQuiz";
import FindQuiz from "./FindQuiz";
import PopQuiz from "./PopQuiz";

function QuizControl(){

	const [makeVisible, setMakeVisible] = useState(false);
	const [findVisible, setFindVisible] = useState(false);

	const handleMakeVisible = () => {
		setMakeVisible(true);
	}

	const handleFindVisible = () => {
		setFindVisible(true);
	}

	const handleReturnHome = () => {
		setFindVisible(false);
		setMakeVisible(false);
	}

	const quizContainer = {
		display: 'flex',
		flexDirection: 'row',
		height: '80vh',
	}
	const bodyWrapStyle = {
		width: '70%',
		backgroundColor: 'white',
		color: 'black',
		padding: '20px',
		borderRight: '3px solid white'
	}

	let componentVisible;

	if (makeVisible){
		componentVisible = <MakeQuiz returnHome={handleReturnHome}/>
	} else if (findVisible) {
		componentVisible = <FindQuiz returnHome={handleReturnHome} />
	} else {
		componentVisible = 
			<div>
				<button onClick={handleMakeVisible}>Make a Quiz</button>
				<br/>
				<button onClick={handleFindVisible}>Find a Quiz</button>	
			</div>
	}

	return(
		<React.Fragment>
			<div style={quizContainer}>
				<div style={bodyWrapStyle}>
					{componentVisible}
				</div>
				<PopQuiz />
			</div>
		</React.Fragment>
	)
}

export default QuizControl;