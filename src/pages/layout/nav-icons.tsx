import type { Icon } from 'phosphor-react';
import {
  ChartPie,
  Users,
  Barcode,
  Article,
  Warning
} from 'phosphor-react'

export const navIcons = {
  resumen: ChartPie,
  facturas: Article,
  productos: Barcode,
  clientes: Users,
  error: Warning
} as Record<string, Icon>;
