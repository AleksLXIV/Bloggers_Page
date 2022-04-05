import React from 'react'
import './Slider.styles.scss'
import Button from './../Button/Button.component';
import Cards from './../Cards/Cards.component';
import { ReactComponent as Logo } from "./../../images/Vector.svg"
import { act, act2 } from './activatingSlider'


const Slider = ({ users, setUserPost }) => {

	return (
		<React.Fragment>
			<div className='slider__wrap'>
				<Button children={<Logo />}
					id='btn1'
					transform
					onclick={() => act()}
				/>
				<Button children={<Logo />}
					id='btn'
					onclick={() => act2()}
				/>
			</div>
			<Cards users={users} setUserPost={setUserPost} />
		</React.Fragment>
	)
}
export default Slider
