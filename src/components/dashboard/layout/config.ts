import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'clientes', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'productos', title: 'Productos', href: paths.dashboard.productos, icon: 'productos' },
  { key: 'facturas', title: 'Facturas', href: paths.dashboard.facturas, icon: 'facturas' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
