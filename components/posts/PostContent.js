 
export default function PostContent({ title, content, image }) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700 leading-relaxed">{content}</div>
      </>
    );
  }
  