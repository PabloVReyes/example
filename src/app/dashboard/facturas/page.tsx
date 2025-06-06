import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

import { config } from '@/config';
import type { Producto } from '@/components/dashboard/productos/productos-table';
import { FacturasTable } from '@/components/dashboard/facturas/facturas-table';
import { FacturasFilters } from '@/components/dashboard/facturas/facturas-filters';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const facturas = [
  { "id": 1, "name": "Energy Protein Bars",             "user": "Dollie", "price": 2.29, "amount": 9, "createdAt": "4/1/2025" },
  { "id": 2, "name": "Multi-Tool",                      "user": "Margarita", "price": 39.99, "amount": 94, "createdAt": "4/20/2025" },
  { "id": 3, "name": "Cat Tree with Scratching Posts",  "user": "Ardyth", "price": 79.99, "amount": 79, "createdAt": "10/23/2024" },
  { "id": 4, "name": "Portable Hammock with Stand",     "user": "Irina", "price": 69.99, "amount": 65, "createdAt": "7/14/2024" },
  { "id": 5, "name": "Cucumber Lime Sparkling Water",   "user": "Morna", "price": 1.49, "amount": 42, "createdAt": "2/25/2025" },
  { "id": 6, "name": "LED Flashlight with Rechargeable Batteries", "price": 19.99, "amount": 88, "createdAt": "4/14/2025" },
  { "id": 7, "name": "Garlic Butter Sauce", "price": 3.59, "amount": 60, "createdAt": "6/17/2024" },
  { "id": 8, "name": "Chili Beans in Sauce", "price": 1.79, "amount": 84, "createdAt": "1/23/2025" },
  { "id": 9, "name": "Coconut Curry Lentils", "price": 5.79, "amount": 69, "createdAt": "9/12/2024" },
  { "id": 10, "name": "Quinoa", "price": 4.49, "amount": 2, "createdAt": "4/30/2025" }
] satisfies any[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedProductos = applyPagination(facturas, page, rowsPerPage);

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
            Agregar
          </Button>
        </div>
      </Stack>
      <FacturasFilters />
      <FacturasTable
        count={facturas.length}
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
