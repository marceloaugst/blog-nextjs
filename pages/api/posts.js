let posts = [
    { id: '1', title: 'Post 1', summary: 'Resumo do post 1', content: 'Conteúdo completo do Post 1' },
    { id: '2', title: 'Post 2', summary: 'Resumo do post 2', content: 'Conteúdo completo do Post 2' },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      return res.status(200).json(posts);
    }
  
    if (req.method === 'POST') {
      const newPost = { ...req.body, id: String(posts.length + 1) };
      posts.push(newPost);
      return res.status(201).json(newPost);
    }
  
    res.status(405).end(); 
  }
  