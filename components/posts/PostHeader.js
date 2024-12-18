/* eslint-disable @next/next/no-img-element */
export default function PostHeader({ image, author, authorPhoto, date }) {
    return (
      <div className="flex items-center mb-6">
        <img
          src={authorPhoto}
          alt={author}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-medium">{author}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    );
  }
  