"use client";

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/routing';
import { routes } from '@/app/resources';
import { Flex, Spinner } from '@/once-ui/components';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const pathname = usePathname();
    const [isRouteEnabled, setIsRouteEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const performChecks = async () => {
            setLoading(true);
            setIsRouteEnabled(false);

            const checkRouteEnabled = () => {
                if (!pathname) return false;

                // Remove locale prefix if present (e.g., '/en/about' -> '/about')
                let path = pathname;
                const localePrefixMatch = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
                if (localePrefixMatch) {
                    path = pathname.replace(/^\/[a-z]{2}/, '') || '/';
                }

                if (path in routes) {
                    return routes[path as keyof typeof routes];
                }

                const dynamicRoutes = ['/blog', '/work'] as const;
                for (const route of dynamicRoutes) {
                    if (path?.startsWith(route) && routes[route]) {
                        return true;
                    }
                }

                return false;
            };

            const routeEnabled = checkRouteEnabled();
            setIsRouteEnabled(routeEnabled);
            setLoading(false);
        };

        performChecks();
    }, [pathname]);

    if (loading || !isRouteEnabled) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    return <>{children}</>;
};

export { RouteGuard };
