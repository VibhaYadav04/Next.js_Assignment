export default function PostList({ posts, onSelectPost }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} onClick={() => onSelectPost(post)} style={{ cursor: 'pointer' }}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
