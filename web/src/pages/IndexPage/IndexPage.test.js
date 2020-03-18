import { render, cleanup } from '@testing-library/react'

import IndexPage from './IndexPage'

describe('IndexPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<IndexPage />)
    }).not.toThrow()
  })
})
