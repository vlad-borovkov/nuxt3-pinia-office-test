import HttpFactory from '~/repositories/factory'
import { CommonResponse } from '~/types/DTO/common/response'
import { IPost } from 'types/DTO/posts'
import { mockData } from '~/mocks/posts'

class PostsModule extends HttpFactory {
  // async findAll(params: object): Promise<CommonResponse<IPost[]>> {
  //   // return await this.get('/api/v1/posts', { query: params })
  //   return await new Promise((resolve) => resolve(mockData.posts))
  // }
}
export default PostsModule
