import './App.css';
import {AuthContext} from "./context/AuthContext.js";
import {useAuth} from "./hooks/auth.hook.js"
import {useRoutes} from './routes.js';


function App() {
    const {enter, exit, token, userId} = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth)
    return (
        <AuthContext.Provider value={{enter, exit, token, userId}}>
            <div className="App">
                {routes}
            </div>
        </AuthContext.Provider>

    );
}

export default App;
