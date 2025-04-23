import { useEffect } from "react";
import "preline/preline";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from "./Routing/MainRoute";
import { AuthProvider } from './context/AuthContext';

function App() {
    useEffect(() => {
        import("preline/preline").then(() => {
            console.log("Preline initialized ✅");
        });
    }, []);

    return (
        <BrowserRouter>
            <AuthProvider>
                <MainRoute />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;