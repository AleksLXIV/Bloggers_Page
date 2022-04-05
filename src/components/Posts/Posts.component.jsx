import React from 'react'
import Post from './../Post/Post.component'
import './Posts.styles.scss'


const Posts = ({ posts, userActive }) => {
	const { name } = userActive
	return (
		<section className="p__wrapper">
			<div className="post__items">
				<h2>{posts.length} актуальных поста {name}</h2>
				{posts
					.map(post => <Post key={post.id} post={post} />)
				}
			</div>
		</section>
	)
}
export default Posts