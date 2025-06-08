import type { NavItemConfig } from './types';
import { paths } from '../../paths';

export const navItems = [
  { key: 'resumen', title: 'Resumen', href: paths.home, icon: 'resumen'},
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
