import React from 'react';
import PropTypes from 'prop-types';


function FindQuiz(props) {
  const findQuiz = {
    position: 'absolute',
    bottom: '50%',
    left: '40%',
  }
  return(
    <React.Fragment>
      <div style={findQuiz}>
        <p>Find form goes here</p>
        <button onClick={props.returnHome}>Return Home</button>
      </div>
    </React.Fragment>
  )
}

FindQuiz.propTypes = {
  returnHome: PropTypes.func
}

export default FindQuiz;