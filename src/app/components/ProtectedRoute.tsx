"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const authToken = localStorage.getItem('auth_token'); // or however you store your auth state

        if (!authToken) {
            router.push('/signin');
        }
    }, [router]);

    return <>{children}</>;
};

export default ProtectedRoute;