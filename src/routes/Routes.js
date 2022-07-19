import {Switch, Route} from "react-router-dom"
import Casamento from "../pages/Casamento/Casamento"
import Confraternizacao from "../pages/Confraternizacao/Confraternizacao"
import Formatura from "../pages/Formatura/Formatura"
import Home from "../pages/Home/Home"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'


function Routes(){

    return(
        <>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
        />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/formatura">
                <Formatura/>
            </Route>
            <Route path="/casamento">
                <Casamento/>
            </Route>
            <Route path="/confraternizacao">
                <Confraternizacao/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes