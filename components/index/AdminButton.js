import Link from 'next/link';

export default function AdminButton() {
  return (
    <Link
      href="/admin"
      className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Adicionar Nova Postagem
    </Link>
  );
}
