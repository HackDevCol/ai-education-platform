import { getIntegrantes } from '@/lib/models';

export default function BusquedasPage() {
  const integrantes = getIntegrantes();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🔍 Búsquedas Realizadas
        </h1>
        <p className="text-gray-600 text-lg">
          Cada integrante del equipo realizó búsquedas específicas utilizando operadores booleanos 
          para encontrar artículos relevantes sobre Inteligencia Artificial en Educación.
        </p>
      </div>

      <div className="space-y-6">
        {integrantes.map((integrante, index) => (
          <div key={integrante.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">👤</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {integrante.nombre}
                  </h2>
                  <p className="text-gray-500">Código: {integrante.codigo}</p>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Búsqueda #{index + 1}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2">📚</span> Base de Datos
                </h3>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">
                  {integrante.baseDatos}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2">📊</span> Resultados Obtenidos
                </h3>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="text-2xl font-bold text-blue-600">
                    {integrante.numeroResultados.toLocaleString()}
                  </span> documentos
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <span className="mr-2">🔗</span> Cadena de Búsqueda
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {integrante.cadenaBusqueda}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-3">
                📝 Análisis de la Cadena
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <div className="font-semibold text-blue-800">Operador AND</div>
                  <div className="text-gray-600">Combina términos requeridos</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="font-semibold text-purple-800">Operador OR</div>
                  <div className="text-gray-600">Términos alternativos</div>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <div className="font-semibold text-red-800">Operador NOT</div>
                  <div className="text-gray-600">Excluye términos no deseados</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Información adicional */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">💡 ¿Por qué Operadores Booleanos?</h2>
        <p className="text-lg leading-relaxed">
          Los operadores booleanos (AND, OR, NOT) permiten realizar búsquedas precisas en bases de datos 
          científicas. Su uso correcto garantiza resultados relevantes y reduce el ruido informacional, 
          facilitando la identificación de literatura pertinente para la investigación.
        </p>
      </div>
    </div>
  );
}
