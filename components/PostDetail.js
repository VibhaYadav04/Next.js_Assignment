export default function PostDetail({ post, onClose }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <button
        onClick={onClose}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Close
      </button>
    </div>
  );
}
