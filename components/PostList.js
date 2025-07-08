export default function PostList({ posts, onSelectPost }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li
          key={post.id}
          onClick={() => onSelectPost(post)}
          className="cursor-pointer bg-white hover:bg-blue-100 transition rounded-lg shadow-sm p-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-blue-700">{post.title}</h2>
        </li>
      ))}
    </ul>
  );
}