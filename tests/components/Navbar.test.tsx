import { render, screen } from '@testing-library/react'
import Navbar from 'components/NavBar'

describe('Navbar', () => {
  it('should render the list item of navbar', () => {
    render(<Navbar />)

    const items = screen.getAllByRole('listitem')

    const labels = items.map((item) => item.textContent)

    expect(items.length).toBeGreaterThan(0)
    expect(labels).toEqual([
      'HOME',
      'ABOUT US',
      'OUR TEAMS',
      'MARKETPLACE ROADMAP',
      'WHITEPAPER',
    ])
  })
})
