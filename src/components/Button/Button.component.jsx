import React from 'react'
import './Button.styles.scss'

const Button = ({ children, transform, id, onclick }) => {

	return (
		<React.Fragment>
			<div className={`${transform ? 'button transform' : 'button'}`}
				onClick={onclick}
			>
				{children}
			</div>
		</React.Fragment>
	)
}

export default Button