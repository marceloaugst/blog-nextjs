import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { posts } from '../mock/posts';

describe('Home Page', () => {
  it('deve renderizar o título principal', () => {
    render(<Home posts={posts} />);
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('deve renderizar o número correto de posts', () => {
    render(<Home posts={posts} />);
    const blogCards = screen.getAllByRole('heading', { level: 2 }); // Baseado no título do card
    expect(blogCards.length).toBe(posts.length);
  });
});
