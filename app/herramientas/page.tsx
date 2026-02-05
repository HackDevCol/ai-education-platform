'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Herramienta {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  url: string;
  nivelEducativo: string;
}

export default function HerramientasPage() {
  const [herramientas, setHerramientas] = useState<Herramienta[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    url: '',
    nivelEducativo: ''
  });

  // Cargar herramientas
  useEffect(() => {
    fetchHerramientas();
  }, []);

  const fetchHerramientas = async () => {
    try {
      const res = await fetch('/api/herramientas');
      const data = await res.json();
      setHerramientas(data);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar herramientas:', error);
      setLoading(false);
    }
  };

  // CREATE
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/herramientas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchHerramientas();
        resetForm();
        alert('✅ Herramienta creada exitosamente');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error al crear herramienta');
    }
  };

  // UPDATE
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    
    try {
      const res = await fetch(`/api/herramientas/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchHerramientas();
        resetForm();
        alert('✅ Herramienta actualizada exitosamente');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error al actualizar herramienta');
    }
  };

  // DELETE
  const handleDelete = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar esta herramienta?')) return;
    
    try {
      const res = await fetch(`/api/herramientas/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchHerramientas();
        alert('✅ Herramienta eliminada exitosamente');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error al eliminar herramienta');
    }
  };

  const startEdit = (herramienta: Herramienta) => {
    setEditingId(herramienta.id);
    setFormData({
      nombre: herramienta.nombre,
      descripcion: herramienta.descripcion,
      categoria: herramienta.categoria,
      url: herramienta.url,
      nivelEducativo: herramienta.nivelEducativo
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      descripcion: '',
      categoria: '',
      url: '',
      nivelEducativo: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Cargando herramientas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ⚙️ Herramientas de IA Educativas
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Gestiona el catálogo de herramientas de Inteligencia Artificial aplicadas a la educación.
        </p>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          {showForm ? '❌ Cancelar' : '➕ Nueva Herramienta'}
        </button>
      </div>

      {/* Formulario CREATE/UPDATE */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {editingId ? '✏️ Editar Herramienta' : '➕ Nueva Herramienta'}
          </h2>
          
          <form onSubmit={editingId ? handleUpdate : handleCreate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nombre de la Herramienta *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="Ej: ChatGPT, Khan Academy..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Categoría *
                </label>
                <select
                  required
                  value={formData.categoria}
                  onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Seleccionar...</option>
                  <option value="Asistente Virtual">Asistente Virtual</option>
                  <option value="Sistema de Tutoría Inteligente">Sistema de Tutoría Inteligente</option>
                  <option value="Evaluación Automática">Evaluación Automática</option>
                  <option value="Análisis de Datos">Análisis de Datos</option>
                  <option value="Creación de Contenido">Creación de Contenido</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Descripción *
                </label>
                <textarea
                  required
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  rows={3}
                  placeholder="Describe las características y funcionalidades..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nivel Educativo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nivelEducativo}
                  onChange={(e) => setFormData({...formData, nivelEducativo: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="Ej: Todos los niveles, Básica, Media..."
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                {editingId ? '💾 Guardar Cambios' : '➕ Crear Herramienta'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                ❌ Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Herramientas - READ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {herramientas.map((herramienta) => (
          <div key={herramienta.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                {herramienta.categoria}
              </div>
              <div className="text-2xl">🤖</div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {herramienta.nombre}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {herramienta.descripcion}
            </p>

            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Nivel:</span> {herramienta.nivelEducativo}
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href={herramienta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center text-sm font-semibold transition"
              >
                🔗 Visitar
              </a>
              <button
                onClick={() => startEdit(herramienta)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(herramienta.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {herramientas.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-gray-600 text-lg">
            No hay herramientas registradas. ¡Crea la primera!
          </p>
        </div>
      )}
    </div>
  );
}