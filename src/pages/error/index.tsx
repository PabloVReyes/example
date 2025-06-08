import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowLeft as ArrowLeftIcon } from 'phosphor-react';

import { useNavigate } from 'react-router-dom';
import { paths } from '../../paths';
import { Button } from '@mui/material';


export default function NotFound(): React.JSX.Element {
    const navigate = useNavigate()
    const redirect = () => {
        navigate(paths.home)
    }

    return (
        <Box component="main" sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
            <Stack spacing={3} sx={{ alignItems: 'center', maxWidth: 'md' }}>
            
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    404: La pagina a la que quires ingresar no existe
                </Typography>
                <Button
                    onClick={redirect}
                    startIcon={<ArrowLeftIcon fontSize="var(--icon-fontSize-md)" />}
                    variant="contained"
                >
                    Volver
                </Button>
            </Stack>
        </Box>
    );
}
