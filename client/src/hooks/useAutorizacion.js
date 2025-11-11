import { useContext } from "react";
import { AutorizacionesContext } from "../context/AutorizacionContex";

export function useAutorizacion() {
    const context = useContext(AutorizacionesContext);

    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}