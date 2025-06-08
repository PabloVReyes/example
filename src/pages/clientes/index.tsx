import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    Download as DownloadIcon,
    Plus as PlusIcon,
    Upload as UploadIcon
} from 'phosphor-react';

import type { Cliente } from './clientes-tabla';
import { ClientesFiltros } from './clientes-filtros';
import { ClientesTabla } from './clientes-tabla';

const clientes = [
    {
        id: 'USR-010',
        name: 'Alcides Antonio',
        avatar: '',
        email: "mmacy0@boston.com",
        phone: "642-812-4057",
        createdAt: "8/12/2024",
    },
    {
        id: 'USR-009',
        name: 'Marcus Finn',
        avatar: '/assets/avatar-9.png',
        email: "jeady1@ucsd.edu",
        phone: "610-639-1073",
        createdAt: "6/15/2024",
    },
    {
        id: 'USR-008',
        name: 'Jie Yan',
        avatar: '/assets/avatar-8.png',
        email: "qritelli2@weebly.com",
        phone: "153-505-4195",
        createdAt: "8/28/2024",
    },
    {
        id: 'USR-007',
        name: 'Nasimiyu Danai',
        avatar: '/assets/avatar-7.png',
        email: "fpretti3@bbb.org",
        phone: "463-376-3778",
        createdAt: "2/4/2025",
    },
    {
        id: 'USR-006',
        name: 'Iulia Albu',
        avatar: '/assets/avatar-6.png',
        email: "coakenfull4@yahoo.co.jp",
        phone: "232-320-0811",
        createdAt: "4/16/2025",
    },
    {
        id: 'USR-005',
        name: 'Fran Perez',
        avatar: '/assets/avatar-5.png',
        email: "bgwinnell5@networkadvertising.org",
        phone: "546-717-9084",
        createdAt: "2/13/2025",
    },

    {
        id: 'USR-004',
        name: 'Penjani Inyene',
        avatar: '/assets/avatar-4.png',
        email: "mmcmackin6@joomla.org",
        phone: "332-889-5033",
        createdAt: "8/2/2024",
    },
    {
        id: 'USR-003',
        name: 'Carson Darrin',
        avatar: '/assets/avatar-3.png',
        email: "mpossek7@360.cn",
        phone: "621-138-9291",
        createdAt: "7/17/2024"
    },
    {
        id: 'USR-002',
        name: 'Siegbert Gottfried',
        avatar: '/assets/avatar-2.png',
        email: "ccuniam8@1688.com",
        phone: "575-778-2760",
        createdAt: "9/26/2024",
    },
    {
        id: 'USR-001',
        name: 'Miron Vitold',
        avatar: '/assets/avatar-1.png',
        email: "apenwright9@acquirethisname.com",
        phone: "958-789-8323",
        createdAt: "12/5/2024",
    },
] satisfies Cliente[];

export default function Clientes(): React.JSX.Element {
    const page = 0;
    const rowsPerPage = 5;

    const paginatedClientes = applyPagination(clientes, page, rowsPerPage);

    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                    <Typography variant="h4">Clientes</Typography>
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
                        Agregar nuevo cliente
                    </Button>
                </div>
            </Stack>
            <ClientesFiltros />
            <ClientesTabla
                count={paginatedClientes.length}
                page={page}
                rows={paginatedClientes}
                rowsPerPage={rowsPerPage}
            />
        </Stack>
    );
}

function applyPagination(rows: Cliente[], page: number, rowsPerPage: number): Cliente[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
