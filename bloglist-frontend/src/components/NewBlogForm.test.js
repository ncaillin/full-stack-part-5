import {React} from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewBlogForm from './NewBlogForm'

describe('new blog form', () => {
  test('on form submit calls event handler with correct props', async () => {
    const user = userEvent.setup()
    const newBlog = jest.fn()
    const blogFormRef = {}
    const userForTest = {token: 'foo'}
    blogFormRef.current = {toggleVisible: jest.fn()}
    render(<NewBlogForm newBlog={newBlog} blogFormRef={blogFormRef} user={userForTest}/>)
    const title = screen.getByPlaceholderText('title')
    const author = screen.getByPlaceholderText('author')
    const url = screen.getByPlaceholderText('url')
    const button = screen.getByText('post')
    await user.type(title, 'typing a title')
    await user.type(author, 'typing an author')
    await user.type(url, 'typing a url')
    await user.click(button)
    const callParams = newBlog.mock.calls[0]
    expect(callParams).toContain('typing a title')
    expect(callParams).toContain('typing an author')
    expect(callParams).toContain('typing a url')
  })
})