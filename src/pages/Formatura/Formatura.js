import { useContext } from "react"

import Header from "../../components/Header/Header"
import BeerCard from "../../components/BeerCard/BeerCard"
import NoDrinkMessage from "../../components/NoDrinkMessage/NoDrinkMessage"

import { FormaturaContext } from "../../contexts/FormaturaContext"

function Formatura(){

    const { formaturaList } = useContext(FormaturaContext)

    return(
        <>
        <Header/>
        <h2 className="pageTitle">Formatura</h2>
        <h3 className="listTitle">Lista de bebidas</h3>
        {formaturaList.length > 0? (
                <ul className="beerList">
                {formaturaList?.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} type="formatura"/>
                ))}

                </ul>
            ) : (
                <NoDrinkMessage/>
            )}
        </>
    )
}

export default Formatura