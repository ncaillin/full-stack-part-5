import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'

describe('testing like button', () => {
  test('when button clicked twice, handler prop gets called twice', async () => {
    const mockFunction = jest.fn()
    render(<LikeButton handleClick={mockFunction} />)


    const user = userEvent.setup()
    const likeButton = screen.getByText('like')
    await user.click(likeButton)
    await user.click(likeButton)
    expect(mockFunction.mock.calls).toHaveLength(2)
  })
})