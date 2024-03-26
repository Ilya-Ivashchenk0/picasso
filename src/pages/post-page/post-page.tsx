import './post-page.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../../store/postsApi'

export const PostPage: React.FC = () => {
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useGetPostByIdQuery(id!)

  const goBack = () => {
    navigate(-1)
  }

  if (isLoading) {
    return (
      <div className='post-page'>
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <div className='post-page'>
      <h1 className='page__number'>{id}</h1>
      <div className='post-page__info-wrapper'>
        <h2 className='post-page__title'>{data?.title}</h2>
        <p className='post-page__description'>{data?.body}</p>
        <p className='post-page__create'>{data?.userId}</p>
      </div>
      <button className='post-page__button' type='button' onClick={goBack}>← Назад</button>
    </div>
  )
}
