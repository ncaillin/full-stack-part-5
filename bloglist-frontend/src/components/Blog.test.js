import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
describe('testing blog page', () => {
  let container
  let setBlogs = jest.fn()
  beforeEach(() => {
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
    const blogs = []

    container = render(
      <Blog blog={blog} user={user} setBlogs={setBlogs} blogs={blogs} />
    ).container
  })

  test('renders title and author, but not url or likes by default', () => {
  
    
    const title = screen.getByText('testTitle')
    const author = screen.getByText('Foo')
    expect(title).toBeDefined()
    expect(author).toBeDefined()
    const div = container.querySelector('.TogglableContent')
    expect(div).toHaveStyle('display: none')
    
  })
  test('url and likes shown after click', async () => {
    const div = container.querySelector('.TogglableContent')
    expect(div).toHaveStyle('display: none')

    const user = userEvent.setup()
    const button = screen.getByText('view')
    await user.click(button)

    screen.getByText('url: bar')
    screen.getByText('likes: 12')
  })
})