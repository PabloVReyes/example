import type { NavItemConfig } from './types';
import { paths } from '../../paths';

export const navItems = [
  { key: 'resumen', title: 'Resumen', href: paths.home, icon: 'resumen' },
  { key: 'clientes', title: 'Clientes', href: paths.clientes, icon: 'clientes' },
  { key: 'productos', title: 'Productos', href: paths.productos, icon: 'productos'},
  { key: 'facturas', title: 'Facturas', href: paths.facturas, icon: 'facturas'},
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'error' },
] satisfies NavItemConfig[];
