import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="notes-list-empty">
      <p>404 — Halaman tidak ditemukan.</p>
      <p>
        <Link to="/">Kembali ke daftar catatan</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;