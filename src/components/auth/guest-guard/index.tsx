import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import { paths } from '../../../paths';
import { logger } from '../../../lib/default-logger';
import { useUser } from '../../../hooks/use-user';

export interface GuestGuardProps {
    children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps): React.JSX.Element | null {
    const navigate = useNavigate();
    const { user, error, isLoading } = useUser();
    const [isChecking, setIsChecking] = React.useState<boolean>(true);

    const checkPermissions = async (): Promise<void> => {
        if (isLoading) {
            return;
        }

        if (error) {
            setIsChecking(false);
            return;
        }

        if (user) {
            logger.debug('[GuestGuard]: User is logged in, redirecting to dashboard');
            navigate(paths.home, { replace: true });
            return;
        }

        setIsChecking(false);
    };

    React.useEffect(() => {
        checkPermissions().catch(() => {
            // noop
        });
    }, [user, error, isLoading]);

    if (isChecking) {
        return null;
    }

    if (error) {
        return <Alert color="error">{error}</Alert>;
    }

    return <>{children}</>;
}
