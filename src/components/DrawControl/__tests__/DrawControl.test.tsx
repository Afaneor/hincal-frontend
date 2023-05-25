import React from 'react'
import { screen } from '@testing-library/react'
import { render } from 'src/test-utils'
import { DrawControl } from '../'

test('renders component successfully', () => {
  render(<DrawControl  />)
  const element = screen.getByTestId('test-DrawControl')
  expect(element).toBeInTheDocument()
})
