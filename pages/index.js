import BlogCard from '../components/index/BlogCard';
import AdminButton from '../components/index/AdminButton';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>

      <div className="mt-12 text-right mb-5">
        <AdminButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const posts = [
    {
      id: '1',
      title: 'A história de um homem que encontrou a felicidade',
      summary: 'Era uma vez um homem chamado João que vivia uma vida infeliz. Ele tinha um bom emprego, uma família amorosa e uma casa confortável, mas ele não conseguia se sentir satisfeito.',
      image: '/images/blog1.jpg',
      author: 'João Silva',
      authorPhoto: '/images/author1.jpg',
      date: '14 de dezembro de 2024',
    },
    {
      id: '2',
      title: 'A Escritora Bloqueada',
      summary: 'Uma escritora famosa, mas infeliz',
      image: '/images/blog2.jpg',
      author: 'Marcio Vanlentin',
      authorPhoto: '/images/author2.jpg',
      date: '13 de dezembro de 2024',
    },
    {
      id: '3',
      title: 'O Empresário Exausto',
      summary: 'Um CEO de sucesso, sempre correndo contra o tempo',
      image: '/images/blog3.jpg',
      author: 'Thiago Alves',
      authorPhoto: '/images/author3.jpg',
      date: '14 de dezembro de 2024',
    },
    {
      id: '4',
      title: 'A Atleta Frustrada',
      summary: 'Uma atleta olímpica, após uma lesão grave',
      image: '/images/blog4.jpg',
      author: 'Matheus Augusto',
      authorPhoto: '/images/author4.jpg',
      date: '13 de dezembro de 2024',
    },
    {
      id: '5',
      title: 'O Médico Desiludido',
      summary: 'Um médico renomado, desiludido com a rotina hospitalar',
      image: '/images/blog5.jpg',
      author: 'Manoel Silva',
      authorPhoto: '/images/author5.jpg',
      date: '14 de dezembro de 2024',
    },
    {
      id: '6',
      title: 'A Mãe Sobrecarregada',
      summary: 'Uma mãe de três filhos, sempre cansada e estressada',
      image: '/images/blog6.jpg',
      author: 'Emanoel Pinheiro',
      authorPhoto: '/images/author6.jpg',
      date: '13 de dezembro de 2024',
    },
    {
      id: '7',
      title: 'O Cantor Solitário',
      summary: 'Um cantor famoso, que se sente vazio apesar do sucesso',
      image: '/images/blog7.jpg',
      author: 'Pedro Junior',
      authorPhoto: '/images/author7.jpg',
      date: '14 de dezembro de 2024',
    },
    {
      id: '8',
      title: 'O Professor Desmotivado',
      summary: 'Um professor universitário, desmotivado com a falta de interesse dos alunos',
      image: '/images/blog8.jpg',
      author: 'Julio Cesar',
      authorPhoto: '/images/author8.jpg',
      date: '13 de dezembro de 2024',
    },
    {
      id: '9',
      title: 'O Artista Desprezado',
      summary: 'Um artista plástico, que nunca conseguiu vender suas obras',
      image: '/images/blog9.jpg',
      author: 'Caio da Costa',
      authorPhoto: '/images/author9.jpg',
      date: '14 de dezembro de 2024',
    },
  ];

  return { props: { posts } };
}