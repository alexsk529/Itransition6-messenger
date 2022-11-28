import {useState, useEffect, useCallback} from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const enter =useCallback((jwt, id, name) => {
        setToken(jwt);
        setUserId(id);
        sessionStorage.setItem('userData', JSON.stringify({
            userId: id,
            token: jwt,
            name: name
        }))
    }, [])

    const exit = () => {
        setToken(null);
        setUserId(null);
        sessionStorage.removeItem('userData');
    }

    useEffect(()=> {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        if (data && data.token) {
            enter(data.token, data.userId, data.name)
        }
    }, [enter])

    return {enter, exit, token, userId}
}