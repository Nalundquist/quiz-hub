import React from "react";

function UserCp(){
	const CpStyle = {
		backgroundColor: 'red',
		padding: '20px',
		borderBottom: '3px solid white',
		color: 'white',
		width: '30%'
	}

	return(
		<div style={CpStyle}>
			<p>Welcome, USERNAME</p>
		</div>
	)
}

export default UserCp;