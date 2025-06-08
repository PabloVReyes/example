import * as React from 'react';
// import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
// import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Budget } from './budget';
import { Grid } from '@mui/material';
import { TotalCustomers } from './total-customers';
import { TasksProgress } from './tasks-progress';
import { TotalProfit } from './total-profit';
import { Sales } from './sales';
import { Traffic } from './traffic';
import { LatestProducts } from './latest-products';
import { LatestOrders } from './latest-orders';


export default function Resumen(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid size={{ lg: 3, sm: 6, xs: 12 }}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid size={{ lg: 3, sm: 6, xs: 12 }}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid size={{ lg: 3, sm: 6, xs: 12 }}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid size={{ lg: 3, sm: 6, xs: 12 }}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>
      <Grid size={{ lg: 8, xs: 12 }}>
        <Sales
          chartSeries={[
            { name: '2025', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: '2024', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid size={{ lg: 4, md: 6, xs: 12 }}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Computadora', 'Tablet', 'Telefono']} sx={{ height: '100%' }} />
      </Grid>
      <Grid size={{ lg: 4, md: 6, xs: 12 }}>
        <LatestProducts
          products={[
            {
              "id": 1,
              "name": "Frozen Fruit Medley",
              "image": '',
              "updatedAt": "8/24/2024"
            }, {
              "id": 2,
              "name": "Biodegradable Dog Waste Bags",
              "image": '',
              "updatedAt": "8/21/2024"
            }, {
              "id": 3,
              "name": "Garden Hose Reel",
              "image": '',
              "updatedAt": "7/21/2024"
            }, {
              "id": 4,
              "name": "Sunglasses Case",
              "image": '',
              "updatedAt": "10/23/2024"
            }, {
              "id": 5,
              "name": "Animal Paw Print Soap Dispenser",
              "image": '',
              "updatedAt": "12/11/2024"
            }
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid size={{ lg: 8, md: 12, xs: 12 }}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              "createdAt": "5/9/2025"
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              "createdAt": "2/21/2025"
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              "createdAt": "1/29/2025"
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              "createdAt": "1/3/2025"
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              "createdAt": "10/23/2024"
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              "createdAt": "10/23/2024"
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      {/* 
      
      
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid> */}
    </Grid>
  );
}
