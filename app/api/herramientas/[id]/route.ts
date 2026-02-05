import { NextResponse } from 'next/server';
import { getHerramientaById, updateHerramienta, deleteHerramienta } from '@/lib/models';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const herramienta = getHerramientaById(parseInt(params.id));
    if (!herramienta) {
      return NextResponse.json({ error: 'Herramienta no encontrada' }, { status: 404 });
    }
    return NextResponse.json(herramienta);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener herramienta' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const updated = updateHerramienta(parseInt(params.id), body);
    if (!updated) {
      return NextResponse.json({ error: 'Herramienta no encontrada' }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar herramienta' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = deleteHerramienta(parseInt(params.id));
    if (!deleted) {
      return NextResponse.json({ error: 'Herramienta no encontrada' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Herramienta eliminada exitosamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar herramienta' }, { status: 500 });
  }
}
