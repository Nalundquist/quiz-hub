import React from 'react';

function MakeQuiz() {
  const makeQuiz = {
    position: 'absolute',
    bottom: '50%',
    left: '10%',
  }

  return(
    <React.Fragment>
      <div style={makeQuiz}>
        <button>Make a Quiz</button>
      </div>
    </React.Fragment>
  )
}

export default MakeQuiz;