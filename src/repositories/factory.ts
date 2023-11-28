import { $Fetch } from 'ofetch'

interface IFetchExtras {
  query?: object
  headers?: HeadersInit
}

class HttpFactory {
  private $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  protected async get<T>(url: string, extras: IFetchExtras = {}): Promise<T> {
    const serializedExtras = this.extrasMiddleware(extras)
    const $res: T = await this.$fetch(url, {
      method: 'GET',
      ...serializedExtras,
    })
    return $res
  }

  protected async post<T>(
    url: string,
    data?: object,
    extras: IFetchExtras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, {
      method: 'POST',
      body: data,
      ...extras,
    })
    return $res
  }

  protected async put<T>(
    url: string,
    data?: object,
    extras: IFetchExtras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, {
      method: 'PUT',
      body: data,
      ...extras,
    })
    return $res
  }

  protected async patch<T>(
    url: string,
    data?: object,
    extras: IFetchExtras = {}
  ): Promise<T> {
    const $res: T = await this.$fetch(url, {
      method: 'PATCH',
      body: data,
      ...extras,
    })
    return $res
  }

  protected async delete<T>(
    url: string,
    extras: IFetchExtras = {}
  ): Promise<T> {
    const serializedExtras = this.extrasMiddleware(extras)
    const $res: T = await this.$fetch(url, {
      method: 'DELETE',
      ...serializedExtras,
    })
    return $res
  }

  private deleteNullFields(obj: object) {
    return JSON.parse(
      JSON.stringify(obj, (key, value) => {
        return value === null ? undefined : value
      })
    )
  }

  private extrasMiddleware(extras: IFetchExtras) {
    const { query, headers } = extras
    const serializedExtras: IFetchExtras = {}
    if (query) serializedExtras.query = this.deleteNullFields(query)
    if (headers) serializedExtras.headers = this.deleteNullFields(headers)
    return serializedExtras
  }
}

export default HttpFactory
