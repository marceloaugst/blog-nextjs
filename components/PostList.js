import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} data-testid="post-item">
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
