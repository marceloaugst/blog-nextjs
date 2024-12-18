
import PostHeader from '../../components/posts/PostHeader';
import PostContent from '../../components/posts/PostContent';
import { posts } from '../../mock/posts';

export default function PostDetail({ post }) {
    return (
        <div className= "container mx-auto py-8" >
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border p-6" >
            <PostHeader
    image={ post.image }
    author = { post.author }
    authorPhoto = { post.authorPhoto }
    date = { post.date }
        />
        <PostContent
          title={ post.title }
    content = { post.content }
    image = { post.image }
        />
        </div>
        </div>
  );
}

export async function getStaticPaths() {
    const paths = posts.map((post) => ({ params: { id: post.id } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = posts.find((post) => post.id === params.id);

    const postData = {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        image: post.bloqPhoto,
        authorPhoto: post.authorPhoto,
        date: post.date,
    };

    return { props: { post: postData } };
}

