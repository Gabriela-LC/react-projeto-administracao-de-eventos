import {Switch, Route} from "react-router-dom"
import Casamento from "../pages/Casamento/Casamento"
import Confraternizacao from "../pages/Confraternizacao/Confraternizacao"
import Formatura from "../pages/Formatura/Formatura"
import Home from "../pages/Home/Home"

function Routes(){

    return(
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
    )
}

export default Routes