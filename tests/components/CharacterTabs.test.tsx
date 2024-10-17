import { render, screen } from '@testing-library/react'
import CharacterTabs from 'containers/Home/Character/CharacterTabs'
import { userEvent } from '@testing-library/user-event'

describe('CharacterTabs', () => {
  const onChange = vi.fn()
  const tabs = ['All', 'Legendary', 'Mythic', 'Epic', 'Rare', 'Common']

  const renderComponent = (loading: boolean) => {
    render(<CharacterTabs onChange={onChange} isLoading={loading} />)
    const user = userEvent.setup()
    return {
      user: user,
      items: screen.getAllByRole('listitem'),
      getItem: (label: RegExp) => screen.getByText(label),
    }
  }

  it('should render the correct tabs', () => {
    const { items } = renderComponent(false)

    expect(items.length).toBeGreaterThan(0)

    const labels = items.map((item) => item.textContent)
    expect(labels).toEqual(tabs)
  })

  it.each(
    tabs.map((tab) => ({
      value: tab === 'All' ? '' : tab.toLowerCase(),
      label: tab,
    }))
  )(
    'should call onChange with $value when the $label tab is clicked',
    async ({ value, label }) => {
      const { getItem, user } = renderComponent(false)

      const item = getItem(new RegExp(label))
      await user.click(item)

      expect(onChange).toHaveBeenCalledWith(value)
    }
  )

  it('should not call onChange while loading', async () => {
    const handleChange = vi.fn()
    render(<CharacterTabs onChange={handleChange} isLoading={true} />)
    const user = userEvent.setup()

    const item = screen.getByText(/legendary/i)
    expect(item).toBeInTheDocument()
    await user.click(item)

    expect(handleChange).not.toHaveBeenCalled()
  })
})
