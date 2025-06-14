import * as React from 'react';
import Box from '@mui/material/Box';

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
    return (
        <Box
            sx={{
                display: { xs: 'flex', lg: 'grid' },
                flexDirection: 'column',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '100vh',
            }}
        >
            <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
                <Box sx={{ p: 3 }}>
                </Box>
                <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
                    <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
                </Box>
            </Box>
            <Box
                sx={{
                    alignItems: 'center',
                    background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
                    color: 'var(--mui-palette-common-white)',
                    display: { xs: 'none', lg: 'flex' },
                    justifyContent: 'center',
                    p: 3,
                }}
            />
        </Box>
    );
}
