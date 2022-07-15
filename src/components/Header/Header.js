import { StyledHeader } from "./styled"

import {useHistory} from "react-router-dom"


function Header(){

    const history = useHistory()

    return(
        <StyledHeader>
            <h1 onClick={() => history.push("/")}>Kenzie Events</h1>
            <nav>
                <ul className="navBtnsList">
                    <li><button onClick={() => history.push("/casamento")}>Casamento</button></li>
                    <li><button onClick={() => history.push("/formatura")}>Formatura</button></li>
                    <li><button onClick={() => history.push("/confraternizacao")}>Confraternizacao</button></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header