import { render, screen } from '@testing-library/react';
import BlogCard from '../components/index/BlogCard';

const mockPost = {
  id: '1',
  title: 'Post de Teste',
  summary: 'Resumo do post de teste.',
  image: '/images/test.jpg',
};

describe('BlogCard Component', () => {
  it('deve renderizar título e resumo corretamente', () => {
    render(<BlogCard post={mockPost} />);

    // Verifica se o título está sendo exibido
    expect(screen.getByText('Post de Teste')).toBeInTheDocument();
    // Verifica se o resumo está sendo exibido
    expect(screen.getByText('Resumo do post de teste.')).toBeInTheDocument();
  });

  it('deve renderizar a imagem com o atributo alt correto', () => {
    render(<BlogCard post={mockPost} />);

    const image = screen.getByAltText('Post de Teste');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/test.jpg');
  });
});
