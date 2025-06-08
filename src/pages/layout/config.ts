import type { NavItemConfig } from './types';
import { paths } from '../../paths';

export const navItems = [
  { key: 'resumen', title: 'Resumen', href: paths.home, icon: 'resumen' },
  { key: 'clientes', title: 'Clientes', href: paths.clientes, icon: 'clientes' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
