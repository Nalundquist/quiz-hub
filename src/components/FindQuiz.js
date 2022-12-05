import React from 'react';

function FindQuiz() {
  const findQuiz = {
    position: 'absolute',
    bottom: '50%',
    left: '40%',
  }
  return(
    <React.Fragment>
      <div style={findQuiz}>
        <button>Find a Quiz</button>
      </div>
    </React.Fragment>
  )
}

export default FindQuiz;