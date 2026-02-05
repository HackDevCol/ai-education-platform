import Link from 'next/link';
import { getArticuloById, getIntegranteById } from '@/lib/models';
import { notFound } from 'next/navigation';

export default function ArticuloDetallePage({ params }: { params: { id: string } }) {
  const articulo = getArticuloById(parseInt(params.id));
  
  if (!articulo) {
    notFound();
  }

  const integrante = getIntegranteById(articulo.integranteId);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/articulos"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        ← Volver a artículos
      </Link>

      <div className="bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              {articulo.ano}
            </span>
            <span className="text-gray-500 text-sm">
              Artículo #{articulo.id}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {articulo.titulo}
          </h1>
        </div>

        {/* Metadatos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">👥 Autores</h3>
            <p className="text-gray-600">{articulo.autores}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">📖 Revista/Fuente</h3>
            <p className="text-gray-600">{articulo.revista}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">📅 Año de Publicación</h3>
            <p className="text-gray-600">{articulo.ano}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">📝 Seleccionado por</h3>
            <p className="text-gray-600">{integrante?.nombre}</p>
          </div>
        </div>

        {/* Resumen */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 Resumen</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {articulo.resumen}
          </p>
        </div>

        {/* Palabras Clave */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏷️ Palabras Clave</h2>
          <div className="flex flex-wrap gap-3">
            {articulo.palabrasClave.map((palabra: string, index: number) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200"
              >
                {palabra}
              </span>
            ))}
          </div>
        </div>

        {/* Referencia APA */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">📚 Referencia APA</h2>
          <p className="text-gray-700 text-sm leading-relaxed font-mono bg-white p-4 rounded border border-gray-200">
            {articulo.referenciaAPA}
          </p>
        </div>
      </div>

      {/* Información del integrante */}
      {integrante && (
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Información de la Búsqueda</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-1">Base de Datos</div>
              <div>{integrante.baseDatos}</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Cadena de Búsqueda</div>
              <div className="text-xs font-mono bg-white/20 p-2 rounded">
                {integrante.cadenaBusqueda}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Resultados</div>
              <div>{integrante.numeroResultados.toLocaleString()} documentos</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
