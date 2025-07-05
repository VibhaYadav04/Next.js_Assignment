import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

test('shows post detail and handles close', () => {
  const post = { title: 'Test Title', content: 'Test Content' };
  const onClose = jest.fn();

  render(<PostDetail post={post} onClose={onClose} />);

  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Close'));
  expect(onClose).toHaveBeenCalled();
});
