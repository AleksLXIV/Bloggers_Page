import React from 'react'
import './Post.styles.scss'

const Post = ({ post }) => {
	const postTitle = post.title.slice(0, 1).toUpperCase() + post.title.slice(1)
	const postBody = post.body.slice(0, 1).toUpperCase() + post.body.slice(1)
	return (
		<article className='post-item'>
			<h3>{postTitle}</h3>
			<p>{postBody}</p>
		</article>
	)
}
export default Post