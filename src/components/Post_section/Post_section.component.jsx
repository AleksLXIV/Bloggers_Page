import React from 'react'
import './Post_section.styles.scss'
import Posts from './../Posts/Posts.component';
import BackgroundDecoration from '../Background_decoration/Background_decoration.component';

const PostSection = ({ posts, ...otherProps }) => {

	return (
		<section className="posts" id='postSection'>
			<BackgroundDecoration buttom />
			<Posts posts={posts} {...otherProps} />
		</section>
	)
}
export default PostSection