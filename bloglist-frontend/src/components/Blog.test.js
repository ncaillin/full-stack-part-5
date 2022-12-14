import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders title and author, but not url or likes by default', () => {
  
  const user = {
    username: 'testUser',
    name: 'testy',
  }
  const blog = {
    title: 'testTitle',
    author: 'Foo',
    url: 'bar',
    likes: 12,
    user
  }
  const setBlogs = jest.fn()
  const blogs = []

  const { container } = render(
    <Blog blog={blog} user={user} setBlogs={setBlogs} blogs={blogs} />
  )
  const title = screen.getByText('testTitle')
  const author = screen.getByText('Foo')
  expect(title).toBeDefined()
  expect(author).toBeDefined()
  const div = container.querySelector('.TogglableContent')
  expect(div).toHaveStyle('display: none')

})