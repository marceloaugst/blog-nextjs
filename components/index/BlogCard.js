/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-200">
      <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />

      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src={post.authorPhoto}
            alt={post.author}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-sm font-medium">{post.author}</h3>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-2">
          <Link href={`/posts/${post.id}`} className="hover:text-blue-500">
            {post.title}
          </Link>
        </h2>

        {/* Resumo */}
        <p className="text-sm text-gray-700">{post.summary}</p>
      </div>
    </div>
  );
}
