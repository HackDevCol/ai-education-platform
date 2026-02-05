import { NextResponse } from 'next/server';
import { getHerramientas, createHerramienta } from '@/lib/models';

export async function GET() {
  try {
    const herramientas = getHerramientas();
    return NextResponse.json(herramientas);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener herramientas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newHerramienta = createHerramienta(body);
    return NextResponse.json(newHerramienta, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear herramienta' }, { status: 500 });
  }
}
