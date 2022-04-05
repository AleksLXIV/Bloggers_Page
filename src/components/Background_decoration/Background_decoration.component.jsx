import React from 'react'
import './Background_decoration.styles.scss'
import { ReactComponent as Logo } from './../../images/Ellipse.svg'

const BackgroundDecoration = ({buttom, top}) => {
	const arrDiv = []
	for (let i = 0; i < 300; i++) {
		arrDiv.push(i)
	}

	return (
		<div className={`${buttom ? 'buttom': ''} ${top ? 'top' : ''}`}>
			<div className="posts__img">
				<div className="posts__b">
					{arrDiv.map(i => <div key={i} className="b"></div>)}
				</div>
				<Logo className="posts__ellipse" />
			</div>

		</div>
	)
}
export default BackgroundDecoration