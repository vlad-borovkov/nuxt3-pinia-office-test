import { $fetch } from 'ofetch'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import PostsModule from '~/repositories/modules/Posts'

interface IApiInstance {
  posts: PostsModule
}
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const fetchOptions = {
    baseURL: config.public.baseURL,
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    posts: new PostsModule(apiFetcher),
  }
  return {
    provide: {
      api: modules,
    },
  }
})
