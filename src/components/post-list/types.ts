import { DetailedHTMLProps } from 'react'
import { Post } from '../../types'

export interface postListProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  posts: Post[] | undefined
}
