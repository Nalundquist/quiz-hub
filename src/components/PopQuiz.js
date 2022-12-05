import React from 'react';

function PopQuiz() {
  const popQuiz = {
    position: 'relative',
		width: '30%',
		backgroundColor: '#D40927',
		color: 'white',
		padding: '11.5px'
  }

  return(
    <React.Fragment>
      <div style={popQuiz}>
        <p>This is the list of your top quizzes</p>
      </div>
    </React.Fragment>
  )
}

export default PopQuiz;