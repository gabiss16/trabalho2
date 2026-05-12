import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          {/* FOOTER */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 CVPRO. Todos os direitos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">
              Termos
            </a>

            <a href="#" className="hover:text-blue-600">
              Privacidade
            </a>

            <a href="#" className="hover:text-blue-600">
              Contato
            </a>
          </div>
        </div>
    </footer>
  );
} 