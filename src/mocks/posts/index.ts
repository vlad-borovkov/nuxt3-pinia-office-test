import { response } from '~/mocks/common/index'
import { IPost } from 'types/DTO/posts'

const _createPost = (id: number): IPost => ({
  id,
  title: 'Первый пост',
  slug: 'perviy-post',
  description: 'Описание поста',
  created_at: '2023-03-09',
})

const posts: IPost[] = [
  {
    id: 0,
    slug: 'perviy-post',
    title: 'Заголовок поста',
    description: 'Описание поста',
    created_at: '2023-03-09',
  },
]

for (let i = 1; i < 8; i++) {
  posts.push(_createPost(i))
}

const mockData = {
  posts: response(posts),
}

export { mockData }
