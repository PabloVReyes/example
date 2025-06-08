import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    Download as DownloadIcon,
    Plus as PlusIcon,
    Upload as UploadIcon
} from 'phosphor-react';
import { ProductosTabla, type Producto } from './productos-tabla';
import { ProductosFiltros } from './productos-filtros';


const productos = [
    {
        id: 'USR-010',
        name: "Weighted Blanket",
        price: 10,
        stock: 3,
        sale: 88,
        createdAt: "8/12/2024",
    },
    {
        id: 'USR-009',
        name: "Coconut Oil Spray",
        price: 13,
        stock: 3,
        sale: 23,
        createdAt: "6/15/2024",
    },
    {
        id: 'USR-008',
        name: "Kids Tablet",
        price: 14,
        stock: 32,
        sale: 7,
        createdAt: "8/28/2024",
    },
    {
        id: 'USR-007',
        name: "Electric Wine Opener",
        price: 28,
        stock: 12344,
        sale: 23,
        createdAt: "2/4/2025",
    },
    {
        id: 'USR-006',
        name: "Fall-Themed Table Runner",
        price: 30,
        stock: 400,
        sale: 8,
        createdAt: "4/16/2025",
    },
    {
        id: 'USR-005',
        name: "Vegetable Medley",
        price: 20,
        stock: 80,
        sale: 2,
        createdAt: "2/13/2025",
    },

    {
        id: 'USR-004',
        name: "Tailored Dress Pants",
        price: 12,
        stock: 1234,
        sale: 10,
        createdAt: "8/2/2024",
    },
    {
        id: 'USR-003',
        name: "Dark Chocolate Tart",
        price: 34,
        stock: 123,
        sale: 0,
        createdAt: "7/17/2024"
    },
    {
        id: 'USR-002',
        name: "Sweet Potato Chips",
        price: 98,
        stock: 100,
        sale: 2,
        createdAt: "9/26/2024",
    },
    {
        id: 'USR-001',
        name: "Avocado Lime Dressing",
        price: 2,
        stock: 39,
        sale: 10,
        createdAt: "12/5/2024",
    },
] satisfies Producto[];

export default function Productos(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedProductos = applyPagination(productos, page, rowsPerPage);

    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h4">Productos</Typography>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
                            Importar
                        </Button>
                        <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
                            Exportar
                        </Button>
                    </Stack>
                </Stack>
                <div>
                    <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
                        Agregar nuevo producto
                    </Button>
                </div>
            </Stack>
            <ProductosFiltros />
            <ProductosTabla
                count={paginatedProductos.length}
                page={page}
                rows={paginatedProductos}
                rowsPerPage={rowsPerPage}
            />
        </Stack>
    );
}

function applyPagination(rows: Producto[], page: number, rowsPerPage: number): Producto[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
