import type { Icon } from 'phosphor-react';
import {
  ChartPie as ChartPieIcon,
  GearSix as GearSixIcon,
  PlugsConnected as PlugsConnectedIcon,
  User as UserIcon,
  Users as UsersIcon,
  Barcode,
  XSquare
} from 'phosphor-react'

export const navIcons = {
  'resumen': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  productos: Barcode,
  user: UserIcon,
  clientes: UsersIcon,
} as Record<string, Icon>;
