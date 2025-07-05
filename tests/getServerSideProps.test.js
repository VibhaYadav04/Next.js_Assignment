import { getServerSideProps } from '../pages/posts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'Mock Title', content: 'Mock Content' }]),
  })
);

test('fetches posts data in getServerSideProps', async () => {
  const context = {};
  const result = await getServerSideProps(context);
  expect(result.props.posts.length).toBe(1);
  expect(result.props.posts[0].title).toBe('Mock Title');
});
