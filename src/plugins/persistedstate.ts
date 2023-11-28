// https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie))
})
