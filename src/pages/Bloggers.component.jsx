import "./Bloggers.styles.scss";
import React from "react";
import Slider from "./../components/Slider/Slider.component";
import PostSection from "./../components/Post_section/Post_section.component";




class Bloggers extends React.Component {
	constructor() {
		super();

		this.state = {
			//Array of bloggers
			users: [],
			//Array of posts
			posts: [],
			//Activated User
			userActive: {},
			//Array of posts of an activated blogger
			userPost: [],
			//Class for highlighting
			active: null,
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => this.setState({
				users: data
			})
			);
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => this.setState({
				posts: data
			})
			);
	}

	//We filter posts by this user, find the user, activate the illumination of the card
	userPosts = (id, event) => {
		this.setState({
			userPost: this.state.posts.filter(post => post.userId === id)
				.filter((post, ind) => ind < 3),
			userActive: this.state.users.find(user => user.id === id)
		})

		this.active(event)
		this.hidden()
	}

	//We check whether the element is a child to activate the backlight
	active = event => {
		const div = event.target.parentElement
		this.highlight(div)
	}
	//Adding the action class changing the backlight
	highlight = (div) => {
		if (this.state.active) {
			this.state.active.classList.remove('action');
		}

		this.state.active = div;
		this.state.active.classList.add('action');
	}

	hidden = () => {
		const post = document.getElementById('postSection')
		post.classList.add('willAppear')
	}


	render() {

		return (
			<React.Fragment>
				<h1 className="title">Наши топ-блогеры</h1>
				<h3 className="title__info">Лучшие специалисты в своем деле, <br /> средний опыт работы в профессии - 27 лет</h3>
				<Slider
					users={this.state.users}
					setUserPost={this.userPosts}
				/>
				<PostSection posts={this.state.userPost} userActive={this.state.userActive} />
			</React.Fragment>
		)
	}
}

export default Bloggers;