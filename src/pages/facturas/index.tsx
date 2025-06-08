import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    Download as DownloadIcon,
    Plus as PlusIcon,
    Upload as UploadIcon
} from 'phosphor-react';
import { FacturasTabla, type Factura } from './facturas-tabla';
import { FacturasFiltros } from './facturas-filtros';


const facturas = [
    {
        id: 'USR-010',
        user: 'Alcides Antonio',
        avatar: '',
        product: "Weighted Blanket",
        createdAt: "8/12/2024",
    },
    {
        id: 'USR-009',
        user: 'Marcus Finn',
        avatar: '',
        product: "Coconut Oil Spray",
        createdAt: "6/15/2024",
    },
    {
        id: 'USR-008',
        user: 'Jie Yan',
        avatar: '',
        product: "Kids Tablet",
        createdAt: "8/28/2024",
    },
    {
        id: 'USR-007',
        user: 'Nasimiyu Danai',
        avatar: '',
        product: "Electric Wine Opener",
        createdAt: "2/4/2025",
    },
    {
        id: 'USR-006',
        user: 'Iulia Albu',
        avatar: '',
        product: "Fall-Themed Table Runner",
        createdAt: "4/16/2025",
    },
    {
        id: 'USR-005',
        user: "Vegetable Medley",
        avatar: '',
        product: "Vegetable Medley",
        createdAt: "2/13/2025",
    },

    {
        id: 'USR-004',
        user: 'Fran Perez',
        avatar: '',
        product: "Tailored Dress Pants",
        createdAt: "8/2/2024",
    },
    {
        id: 'USR-003',
        user: 'Penjani Inyene',
        avatar: '',
        product: "Dark Chocolate Tart",
        createdAt: "7/17/2024"
    },
    {
        id: 'USR-002',
        user: 'Carson Darrin',
        avatar: '',
        product: "Sweet Potato Chips",
        createdAt: "9/26/2024",
    },
    {
        id: 'USR-001',
        user: 'Siegbert Gottfried',
        avatar: '',
        product: "Avocado Lime Dressing",
        createdAt: "12/5/2024",
    },
] satisfies Factura[];

export default function Facturas(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedFacturas = applyPagination(facturas, page, rowsPerPage);

    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h4">Facturas</Typography>
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
                        Agregar nueva factura
                    </Button>
                </div>
            </Stack>
            <FacturasFiltros />
            <FacturasTabla
                count={paginatedFacturas.length}
                page={page}
                rows={paginatedFacturas}
                rowsPerPage={rowsPerPage}
            />
        </Stack>
    );
}

function applyPagination(rows: Factura[], page: number, rowsPerPage: number): Factura[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
