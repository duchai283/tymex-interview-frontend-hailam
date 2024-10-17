import { HttpResponse, http } from 'msw'
import { data } from './data'

export const handlers = [
  http.get('/api/characters', () => {
    return HttpResponse.json(data)
  }),
]
