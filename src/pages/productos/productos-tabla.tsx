import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useSelection } from '../../hooks/use-selection';
import { Button, ButtonGroup } from '@mui/material';

function noop(): void {
  // do nothing
}

export interface Producto {
  id: string;
  price: number;
  name: string;
  stock: number;
  sale: number;
  createdAt: string;
}

interface ProductosTableProps {
  count?: number;
  page?: number;
  rows?: Producto[];
  rowsPerPage?: number;
}

export function ProductosTabla({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: ProductosTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((Producto) => Producto.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Almacenado</TableCell>
              <TableCell>Vendido</TableCell>
              <TableCell>Registrado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                      <Typography variant="subtitle2">{row.name}</Typography>
                  </TableCell>
                  <TableCell>${row.price}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>{row.sale}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        color='success'
                      >
                        Editar
                      </Button>
                      <Button
                        variant='contained'
                        color='error'
                      >
                        Eliminar
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
