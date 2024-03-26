import './post.css'
import { postProps } from './types'

export const Post: React.FC<postProps> = ({ post, goToPostPage }) => {
  return (
    <li className="post" key={post.id}>
      <article className='post__wrapper'>
        <span className='post__number'>{post.id}</span>
        <h2 className="post__heading">{post.title}</h2>
        <p className="post__description">{post.body}</p>
        <button className="post__button" onClick={() => goToPostPage(post.id)}>
          View
        </button>
      </article>
      <hr />
    </li>
  )
}
