import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IA en Educación - Plataforma de Investigación',
  description: 'Plataforma de gestión de artículos científicos sobre Inteligencia Artificial en Educación',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                🤖 IA en Educación
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-200 transition">
                  Inicio
                </Link>
                <Link href="/busquedas" className="hover:text-blue-200 transition">
                  Búsquedas
                </Link>
                <Link href="/articulos" className="hover:text-blue-200 transition">
                  Artículos
                </Link>
                <Link href="/herramientas" className="hover:text-blue-200 transition">
                  Herramientas IA
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">© 2026 - Taller Bases de Datos</p>
            <p className="text-sm text-gray-400">
              Jeisson Palma • Julian Moreno • Gustavo Gallego
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Fundación Universitaria Konrad Lorenz - Ingeniería de Sistemas
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
