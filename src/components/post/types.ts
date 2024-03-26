import { DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { Post } from '../../types'

export interface postProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  post: Post
  goToPostPage: (id: number) => void
}
