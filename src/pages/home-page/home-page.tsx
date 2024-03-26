import { PostList } from '../../components/post-list'
import './home-page.css'
import { useGetPostsQuery } from '../../store/postsApi'
import React, { useContext, useEffect, useState } from 'react'
import consts from '../../utils/consts'
import { WindowWidthContext } from '../../contexts/WindowWidthContext'
import { WindowWidthContextType } from '../../types'

export const HomePage: React.FC = () => {
  const { windowWidth } = useContext(WindowWidthContext) as WindowWidthContextType
  const [isLoadingMorePosts, setLoadingMorePosts] = useState<boolean>(false)

  const [visiblePostsLength, setVisiblePostsLength] = useState<number>(
    consts.POSTS_LENGTH(windowWidth)
  )

  const { data, isLoading } = useGetPostsQuery(visiblePostsLength)

  const handleButtonClick = () => {
    setLoadingMorePosts(true)

    setTimeout(() => {
      setVisiblePostsLength(visiblePostsLength + consts.POSTS_TO_ADD(windowWidth))
      setLoadingMorePosts(false)
    }, 300)
  }

  useEffect(() => {
    setVisiblePostsLength(consts.POSTS_LENGTH(windowWidth))
  }, [windowWidth])

  if (isLoading) {
    return (
      <div className='home-page'>
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <div className='home-page'>
      <h1 className="home-page__heading">Посты</h1>
      <PostList posts={data} />
      {!isLoadingMorePosts && (
        <button
          type="button"
          onClick={handleButtonClick}
          className="home-page__button"
        >
          Еще
        </button>
      )}
      {isLoadingMorePosts && <p>Загрузка...</p>}
    </div>
  )
}
