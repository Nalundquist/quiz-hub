import QuizHubLogo from '../img/Quizhub.png'
import React from 'react';

function HeadMain(){
	const headerStyle = {
		height: '100px',
		width: '70%',
		padding: '20px',
		borderBottom: '3px solid white',
		borderRight: '3px solid white',
		backgroundColor: '#D40927',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
	
	const logoLeft = { 
		paddingTop: '3px'
	}
	
	const taglineMid = {
		position: 'relative',
		bottom: '5px',
		color: 'white'
	}

	return(
		<React.Fragment>
			<div style={headerStyle}>
				<div style={logoLeft}>
					<img src={QuizHubLogo} width='55%'alt="stylized text logo for Quiz Hub" />
				</div>
				<div style={taglineMid}>
					<p>Your Favorite place for questions and queries!</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default HeadMain;