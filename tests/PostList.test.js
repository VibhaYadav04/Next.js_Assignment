import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';

test('renders list of post titles and handles click', () => {
  const mockPosts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
  ];
  const onSelectPost = jest.fn();

  render(<PostList posts={mockPosts} onSelectPost={onSelectPost} />);
  
  expect(screen.getByText('Post One')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Post One'));
  expect(onSelectPost).toHaveBeenCalledWith(mockPosts[0]);
});
