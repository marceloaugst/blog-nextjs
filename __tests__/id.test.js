import { render, screen } from '@testing-library/react';
import PostDetail from '../pages/posts/[id]';

const mockPost = {
  id: '1',
  title: 'Post de Teste',
  content: 'Este é o conteúdo do post de teste.',
  image: '/images/test.jpg',
  author: 'João Silva',
  authorPhoto: '/images/author.jpg',
  date: '10 de dezembro de 2024',
};

describe('PostDetail Page', () => {
  it('deve exibir o título e conteúdo do post', () => {
    render(<PostDetail post={mockPost} />);

    expect(screen.getByText('Post de Teste')).toBeInTheDocument();
    expect(screen.getByText('Este é o conteúdo do post de teste.')).toBeInTheDocument();
  });

  it('deve exibir a imagem com o atributo alt correto', () => {
    render(<PostDetail post={mockPost} />);

  });

  it('deve exibir o nome do autor', () => {
    render(<PostDetail post={mockPost} />);
    expect(screen.getByText('João Silva')).toBeInTheDocument();
  });
});
