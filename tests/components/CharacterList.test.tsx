import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import CharacterContainer from 'containers/Home/Character'
import { HttpResponse, delay, http } from 'msw'
import { server } from '../mocks/server'

describe('CharacterList', () => {
  it('should render a list of characters', async () => {
    render(<CharacterContainer />)
    const items = await screen.findAllByRole('characterItem')
    expect(items.length).toBeGreaterThan(0)
  })

  it('should render no data prompt when characters is not found', async () => {
    server.use(
      http.get('/api/characters', async () => {
        return HttpResponse.json([])
      })
    )
    render(<CharacterContainer />)
    const message = await screen.findByText(/no data/i)
    expect(message).toBeInTheDocument()
  })

  it('should render loading skeleton while data is fetching', async () => {
    server.use(
      http.get('/api/characters', async () => {
        await delay()
        return HttpResponse.json([])
      })
    )
    render(<CharacterContainer />)
    const loadings = await screen.findAllByRole('loading-skeleton')
    expect(loadings.length).toBeGreaterThan(0)
  })

  it('should remove the loading skeleton after data is fetched', async () => {
    render(<CharacterContainer />)
    await waitForElementToBeRemoved(() =>
      screen.queryAllByRole('loading-skeleton')
    )
  })
})
