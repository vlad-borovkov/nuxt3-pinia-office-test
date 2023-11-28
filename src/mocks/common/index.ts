import { CommonResponse } from 'types/DTO/common/response'

export const response = (data: any): CommonResponse<any> => ({
  data,
  meta: {
    pageCount: 55,
    current_page: 1,
    totalCount: 100,
    last_page: 10,
    per_page: 10,
  },
})
