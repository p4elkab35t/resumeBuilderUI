import { useState, useEffect } from "react";

const mockAuthService = {
    isAuthenticated: false,
    login: () => {
        mockAuthService.isAuthenticated = true;
    },
    logout: () => {
        mockAuthService.isAuthenticated = false;
    },
    checkAuth: () => {
        return mockAuthService.isAuthenticated;
    },
};

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status on mount
        const authStatus = mockAuthService.checkAuth();
        setIsAuthenticated(authStatus);
    }, []);

    const login = () => {
        mockAuthService.login();
        setIsAuthenticated(true);
    };

    const logout = () => {
        mockAuthService.logout();
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};

export default useAuth;
