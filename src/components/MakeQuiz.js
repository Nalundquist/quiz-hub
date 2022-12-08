import React from 'react';
import PropTypes from 'prop-types';

function MakeQuiz(props) {
  const makeQuiz = {
    position: 'absolute',
    bottom: '50%',
    left: '10%',
  }

  return(
    <React.Fragment>
      <div style={makeQuiz}>
        <p>Make Form goes here</p>
        <button onClick={props.returnHome}>Return Home</button>
      </div>
    </React.Fragment>
  )
}

MakeQuiz.propTypes = {
  returnHome: PropTypes.func
}

export default MakeQuiz;