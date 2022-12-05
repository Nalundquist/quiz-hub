import React from "react";
import MakeQuiz from "./MakeQuiz";
import FindQuiz from "./FindQuiz";
import PopQuiz from "./PopQuiz";

function QuizControl(){
	const quizContainer = {
		display: 'flex',
		flexDirection: 'row',
		height: '80vh',
	}
	const bodyWrapStyle = {
		width: '70%',
		backgroundColor: 'white',
		color: 'white',
		borderRight: '3px solid white'
	}

	return(
		<React.Fragment>
			<div style={quizContainer}>
				<div style={bodyWrapStyle}>
					<MakeQuiz />
					<FindQuiz />
				</div>
				<PopQuiz />
			</div>
		</React.Fragment>
	)
}

export default QuizControl;