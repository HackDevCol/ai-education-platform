import Link from 'next/link';
import { getTema, getIntegrantes, getArticulos } from '@/lib/models';

export default function Home() {
  const tema = getTema();
  const integrantes = getIntegrantes();
  const articulos = getArticulos();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          {tema.nombre}
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {tema.descripcion}
        </p>
      </div>

      {/* Motivación */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          💡 Motivación del Proyecto
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {tema.motivacion}
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <div className="text-5xl font-bold mb-2">{integrantes.length}</div>
          <div className="text-xl">Integrantes</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <div className="text-5xl font-bold mb-2">{articulos.length}</div>
          <div className="text-xl">Artículos Científicos</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <div className="text-5xl font-bold mb-2">2</div>
          <div className="text-xl">Bases de Datos</div>
        </div>
      </div>

      {/* Integrantes */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          👥 Equipo de Investigación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrantes.map((integrante) => (
            <div key={integrante.id} className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-3 text-center">👤</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">
                {integrante.nombre}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-3">
                Código: {integrante.codigo}
              </p>
              <div className="text-sm text-gray-500 text-center">
                <p>📚 {integrante.baseDatos}</p>
                <p>🔍 {integrante.numeroResultados.toLocaleString()} resultados</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          href="/busquedas"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-8 text-center transition shadow-lg"
        >
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-2xl font-bold mb-2">Ver Búsquedas</h3>
          <p className="text-blue-100">Explora las cadenas de búsqueda y resultados</p>
        </Link>

        <Link 
          href="/articulos"
          className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-8 text-center transition shadow-lg"
        >
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-2xl font-bold mb-2">Artículos</h3>
          <p className="text-purple-100">Consulta los artículos seleccionados</p>
        </Link>

        <Link 
          href="/herramientas"
          className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-8 text-center transition shadow-lg"
        >
          <div className="text-4xl mb-3">⚙️</div>
          <h3 className="text-2xl font-bold mb-2">Herramientas IA</h3>
          <p className="text-green-100">Gestiona herramientas educativas</p>
        </Link>
      </div>
    </div>
  );
}
