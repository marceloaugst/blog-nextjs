import { useState } from 'react';
import InputField from '../components/admin/InputField';
import TextAreaField from '../components/admin/TextAreaField';
import FileInputField from '../components/admin/FileInputField';
import Header from '../components/admin/Header';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, summary, content, author, image };
    console.log('Novo Post:', newPost);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Adicionar Nova Postagem" />
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <InputField
          id="title"
          label="Título"
          placeholder="Título da Postagem"
          value={title}
          onChange={setTitle}
          required
        />
        <InputField
          id="summary"
          label="Resumo"
          placeholder="Resumo da Postagem"
          value={summary}
          onChange={setSummary}
          required
        />
        <TextAreaField
          id="content"
          label="Conteúdo"
          placeholder="Conteúdo da Postagem"
          value={content}
          onChange={setContent}
          required
        />
        <InputField
          id="author"
          label="Autor"
          placeholder="Autor da Postagem"
          value={author}
          onChange={setAuthor}
          required
        />
        <FileInputField
          id="image"
          label="Imagem"
          onChange={setImage}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Adicionar Post
        </button>
      </form>
    </div>
  );
}
