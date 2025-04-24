
import { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const APP_URL = import.meta.env.VITE_API_URL ;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = useCallback(async () => {
        try {
            const res = await axios.get(`${APP_URL}/api/auth/check-auth`, {
                withCredentials: true,
            });
            if (res.data.isAuthenticated) {
                setUser(res.data.user);
            } else {
                setUser(null);
            }
        } catch  {
            setUser(null);
        } finally {
            setLoading(false);
        }
    },[APP_URL]);

    const logout = async () => {
        try {
            await axios.post(`${APP_URL}/api/auth/logout`, {}, {
                withCredentials: true,
            });
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        checkAuth();
    }, [ checkAuth ]);

    return (
        <AuthContext.Provider value={{ user, setUser, logout, loading,checkAuth }}>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export {AuthContext} ;