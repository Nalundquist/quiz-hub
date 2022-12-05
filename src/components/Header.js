import UserCp from './UserCp.js';
import HeadMain from './HeadMain.js';
import React from 'react';

function Header() {
const headerContainerStyle = {
	display: 'flex',
	flexDirection: 'row'
}
	return(
		<React.Fragment>
			<div style={headerContainerStyle}>
				<HeadMain />
				<UserCp />
			</div>
		</React.Fragment>
	)
}

export default Header;