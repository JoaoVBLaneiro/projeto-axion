import api from './api';
import Cookies from 'js-cookie';

export const register = async (username, email, password) => {
    try {
        const res = await api.post('/auth/local/register', {
            username,
            email,
            password
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (identifier, password) => {
    try {
        const res = await api.post('/auth/local', {
            identifier,
            password
        });
        Cookies.set('token', res.data.jwt, { expires: 7 });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => {
    Cookies.remove('token');
};