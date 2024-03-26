import { Post } from '../post/post'
import './post-list.css'
import { postListProps } from './types'
import { useNavigate } from 'react-router-dom'

export const PostList: React.FC<postListProps> = ({ posts }) => {
  const navigate = useNavigate()

  const goToPostPage = (id: number) => {
    navigate(`/post/${id}`)
  }

  return (
    <ul className="post-list">
      {posts &&
        posts.map((post, index) => <Post key={index} post={post} goToPostPage={goToPostPage} />)}
    </ul>
  )
}
