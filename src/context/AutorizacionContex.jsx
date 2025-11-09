import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import usuariosGuardados from "../assets/data/usuarios.json";

// 1. Crea el contexto
export const AutorizacionesContext = createContext(null);

// 2. Componente Provedor del contexto de autenticacion
export function AutorizacionesProvider({ children }) {
    //const [user, setUser] = useState(null);

    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("LOCAL_STORAGE_KEY")
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            localStorage.removeItem("LOCAL_STORAGE_KEY");
            return null;
        }

    });

    //solo con la intecion de pensar en cargas asincronas de datos o validaciones
    //const [isLoading, setIsLoading] = useState(false);

    //const [token, setToken] = useState(null);

    const login = useCallback((credentials) => {
        //setIsLoading(true); // se activa brevemente, luego se desactiva
        try {
            const usuarioEncontrado = usuariosGuardados.find(
                u => u.username === credentials.username && u.password === credentials.password
            );
            if (usuarioEncontrado) {
                const { password, ...userWithoutPassword } = usuarioEncontrado; // quitamos a password
                setUser(userWithoutPassword);
                //setIsLoading(false); // desactivar carga
                return { success: true }; //retorna exito inmediatamente
            } else {
                // si no se encuentra el usuario o credenciales invalidas
                setUser(null);
                //setIsLoading(false); // dessactivar carga
                return { success: false, message: "Credenciales invalidas" };
            }
        } catch (error) {
            // erroress inesperados en el find, aunque es de importacia en carga asincronica
            console.error("Error en login:", error.message);
            setUser(null);
            setIsLoading(false);
            return { success: false, message: "Error inesperado durante el login" };
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(user));
        } else {
            localStorage.removeItem("LOCAL_STORAGE_KEY");
        }
    }, [user]);

    /*
    useEffect(() => {
        const tokenGuardado = localStorage.getItem("token");
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
        if (tokenGuardado && usuarioGuardado) {
            setToken(tokenGuardado);
            setUser(usuarioGuardado);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) throw new Error("Error en la autenticacion");

            const data = await response.json();

            setToken(data.token);
            setUsuario({ email });

            localStorage.setItem("token", data.token);
            localStorage.setItem("usuario", JSON.stringify({ email }));
            return true;
        } catch (error) {
            console.error("Error en login:", error);
            return false;
        }
    };

    const logout = () => {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
    };
    */

    const valorDelContexto = useMemo(() => ({
        user,
        isAuthenticated: !!user,
        login,
        logout,
    }), [user, login, logout]);

    // 3. proveer el valor del contexto a los hijos
    return (
        <AutorizacionesContext.Provider value={valorDelContexto}>
            {children}
        </AutorizacionesContext.Provider>
    );
}