import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  { "id": 1, "name": "Dollie", "email": "dgrayshon0@zdnet.com", "phone": "142-539-0009", "address": "Mercedes", "createdAt": "7/16/2024" },
  { "id": 2, "name": "Margarita", "email": "mmesant1@kickstarter.com", "phone": "858-273-1479", "address": "Junshan", "createdAt": "11/11/2024" },
  { "id": 3, "name": "Ardyth", "email": "aganny2@wix.com", "phone": "336-201-8156", "address": "Al Maḩjal", "createdAt": "6/13/2024" },
  { "id": 4, "name": "Sally", "email": "sbrookton3@taobao.com", "phone": "211-455-2177", "address": "Hūn", "createdAt": "8/5/2024" },
  { "id": 5, "name": "Chloe", "email": "cmarriot4@biglobe.ne.jp", "phone": "494-235-1548", "address": "Chongkan", "createdAt": "12/16/2024" },
  { "id": 6, "name": "Allison", "email": "abroose5@shinystat.com", "phone": "813-508-0736", "address": "Dasht-e Qal‘ah", "createdAt": "2/25/2025" },
  { "id": 7, "name": "Irina", "email": "iiacobacci6@csmonitor.com", "phone": "218-524-0358", "address": "Ash Shiḩr", "createdAt": "8/8/2024" },
  { "id": 8, "name": "Yard", "email": "yjoisce7@theatlantic.com", "phone": "198-804-5448", "address": "Sośnicowice", "createdAt": "3/17/2025" },
  { "id": 9, "name": "Aryn", "email": "aschultes8@earthlink.net", "phone": "970-249-1360", "address": "Wydminy", "createdAt": "1/28/2025" },
  { "id": 10, "name": "Saunderson", "email": "sportriss9@altervista.org", "phone": "512-237-9079", "address": "Noginsk-9", "createdAt": "7/5/2024" },
  { "id": 11, "name": "Faye", "email": "ftakkosa@jiathis.com", "phone": "494-370-8792", "address": "Araouane", "createdAt": "8/20/2024" },
  { "id": 12, "name": "Brynna", "email": "bdoddridgeb@buzzfeed.com", "phone": "964-904-0168", "address": "Badīn", "createdAt": "8/31/2024" },
  { "id": 13, "name": "Laureen", "email": "ljedrasikc@latimes.com", "phone": "217-147-8679", "address": "Krynki", "createdAt": "10/5/2024" },
  { "id": 14, "name": "Glenn", "email": "gmapisd@paginegialle.it", "phone": "809-215-4502", "address": "Chyšky", "createdAt": "7/7/2024" },
  { "id": 15, "name": "Morna", "email": "mfrankcombee@cornell.edu", "phone": "523-819-0654", "address": "Nueva Germania", "createdAt": "4/9/2025" },
  { "id": 16, "name": "Glory", "email": "gbessef@time.com", "phone": "669-312-1249", "address": "Samanco", "createdAt": "2/9/2025" },
  { "id": 17, "name": "Rosalie", "email": "rdurningg@state.tx.us", "phone": "538-336-1504", "address": "Dayou", "createdAt": "12/19/2024" },
  { "id": 18, "name": "Hermine", "email": "hforstallh@netvibes.com", "phone": "504-773-7732", "address": "Velyki Kopany", "createdAt": "12/30/2024" },
  { "id": 19, "name": "Eberto", "email": "efarndalei@phoca.cz", "phone": "744-137-9632", "address": "Petrolera", "createdAt": "9/7/2024" },
  { "id": 20, "name": "Phillis", "email": "pdaglishj@discuz.net", "phone": "578-488-9566", "address": "Al Qadarif", "createdAt": "2/13/2025" }
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

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
            Agregar
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={customers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
