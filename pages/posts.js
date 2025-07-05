import { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <h1>Blog Posts</h1>
      <PostList posts={posts} onSelectPost={setSelectedPost} />
      {selectedPost && <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return { props: { posts } };
}
