import { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">📝 Blog Posts</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <PostList posts={posts} onSelectPost={setSelectedPost} />
        </div>

        {selectedPost && (
          <div className="bg-white shadow-md rounded-xl p-6 border border-blue-100">
            <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return { props: { posts } };
}
