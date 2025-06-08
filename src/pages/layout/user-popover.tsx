import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {
    SignOut as SignOutIcon,
} from 'phosphor-react';

import { paths } from '../../paths';
import { authClient } from '../../lib/auth';
import { logger } from '../../lib/default-logger';
import { useUser } from '../../hooks/use-user';

export interface UserPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export function UserPopover({ anchorEl, onClose, open }: UserPopoverProps): React.JSX.Element {
    const { checkSession } = useUser();
    const navigate = useNavigate();

    const handleSignOut = React.useCallback(async (): Promise<void> => {
        try {
            const { error } = await authClient.signOut();

            if (error) {
                logger.error('Sign out error', error);
                return;
            }

            await checkSession?.();

            // Redirigir al login o refrescar manualmente según implementación
            navigate(paths.auth.signIn, { replace: true });
        } catch (err) {
            logger.error('Sign out error', err);
        }
    }, [checkSession, navigate]);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            onClose={onClose}
            open={open}
            slotProps={{ paper: { sx: { width: '240px' } } }}
        >
            <Box sx={{ p: '16px 20px' }}>
                <Typography variant="subtitle1">Administrador</Typography>
                <Typography color="text.secondary" variant="body2">
                    admin@admin.com
                </Typography>
            </Box>
            <Divider />
            <MenuList disablePadding sx={{ p: '8px', '& .MuiMenuItem-root': { borderRadius: 1 } }}>
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <SignOutIcon fontSize="var(--icon-fontSize-md)" />
                    </ListItemIcon>
                    Cerrar sesion
                </MenuItem>
            </MenuList>
        </Popover>
    );
}
