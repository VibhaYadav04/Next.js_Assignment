export default function PostDetail({ post, onClose }) {
  return (
    <div style={{ border: '1px solid black', padding: 10, marginTop: 20 }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
