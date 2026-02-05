import Link from 'next/link';
import { getArticulos, getIntegranteById } from '@/lib/models';

export default function ArticulosPage() {
  const articulos = getArticulos();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📚 Artículos Científicos
        </h1>
        <p className="text-gray-600 text-lg">
          Colección de {articulos.length} artículos científicos seleccionados sobre 
          Inteligencia Artificial aplicada a la Educación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articulos.map((articulo) => {
          const integrante = getIntegranteById(articulo.integranteId);
          
          return (
            <Link 
              href={`/articulos/${articulo.id}`}
              key={articulo.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {articulo.ano}
                </div>
                <div className="text-xs text-gray-500">
                  📝 {integrante?.nombre.split(' ')[0]}
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {articulo.titulo}
              </h2>

              <div className="mb-3">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Autores:</span> {articulo.autores}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Revista:</span> {articulo.revista}
                </p>
              </div>

              <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                {articulo.resumen}
              </p>

              <div className="flex flex-wrap gap-2">
                {articulo.palabrasClave.slice(0, 3).map((palabra: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                  >
                    {palabra}
                  </span>
                ))}
                {articulo.palabrasClave.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                    +{articulo.palabrasClave.length - 3} más
                  </span>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Ver detalles completos →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
