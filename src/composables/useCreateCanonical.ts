export const useCreateCanonical = (slug: string) => {
  const config = useRuntimeConfig()
  return {
    rel: 'canonical',
    href: config.public.siteUrl + `${slug || ''}`,
  }
}
