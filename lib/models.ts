import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'lib', 'data.json');

// Función para leer datos
export function readData() {
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(fileContents);
}

// Función para escribir datos
export function writeData(data: any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// ===== FUNCIONES PARA TEMA =====
export function getTema() {
  const data = readData();
  return data.tema;
}

// ===== FUNCIONES PARA INTEGRANTES =====
export function getIntegrantes() {
  const data = readData();
  return data.integrantes;
}

export function getIntegranteById(id: number) {
  const data = readData();
  return data.integrantes.find((i: any) => i.id === id);
}

// ===== FUNCIONES PARA ARTÍCULOS =====
export function getArticulos() {
  const data = readData();
  return data.articulos;
}

export function getArticuloById(id: number) {
  const data = readData();
  return data.articulos.find((a: any) => a.id === id);
}

export function getArticulosByIntegrante(integranteId: number) {
  const data = readData();
  return data.articulos.filter((a: any) => a.integranteId === integranteId);
}

// ===== FUNCIONES CRUD PARA HERRAMIENTAS IA =====
export function getHerramientas() {
  const data = readData();
  return data.herramientasIA;
}

export function getHerramientaById(id: number) {
  const data = readData();
  return data.herramientasIA.find((h: any) => h.id === id);
}

export function createHerramienta(herramienta: any) {
  const data = readData();
  const newId = Math.max(...data.herramientasIA.map((h: any) => h.id), 0) + 1;
  const newHerramienta = { id: newId, ...herramienta };
  data.herramientasIA.push(newHerramienta);
  writeData(data);
  return newHerramienta;
}

export function updateHerramienta(id: number, updates: any) {
  const data = readData();
  const index = data.herramientasIA.findIndex((h: any) => h.id === id);
  if (index !== -1) {
    data.herramientasIA[index] = { ...data.herramientasIA[index], ...updates };
    writeData(data);
    return data.herramientasIA[index];
  }
  return null;
}

export function deleteHerramienta(id: number) {
  const data = readData();
  const index = data.herramientasIA.findIndex((h: any) => h.id === id);
  if (index !== -1) {
    const deleted = data.herramientasIA.splice(index, 1);
    writeData(data);
    return deleted[0];
  }
  return null;
}
