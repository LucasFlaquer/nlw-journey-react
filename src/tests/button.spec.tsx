import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Button } from '../components/button'

describe('<Button />', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Default Button</Button>)

    const button = getByRole('button', { name: /default button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-lime-300 text-lime-950')
  })
  it('renders with primary variant', () => {
    const { getByRole } = render(
      <Button variant="primary">Primary Button</Button>,
    )

    const button = getByRole('button', { name: /primary button/i })
    expect(button).toHaveClass('bg-lime-300')
  })
  it('renders with secondary variant', () => {
    const { getByRole } = render(
      <Button variant="secondary">Secondary Button</Button>,
    )
    const button = getByRole('button', { name: /secondary button/i })
    expect(button).toHaveClass('bg-zinc-800 text-zinc-200')
  })
  it('renders with full size', () => {
    const { getByRole } = render(<Button size="full">Full Size Button</Button>)

    const button = getByRole('button', { name: /full size button/i })
    expect(button).toHaveClass('w-full h-11')
  })
  it('supports additional props', () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} data-testid="custom-button" type="button">
        Custom Button
      </Button>,
    )

    const button = getByTestId('custom-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button') // default type for button
  })
})
