export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
  res.status(200).json(posts);
}
