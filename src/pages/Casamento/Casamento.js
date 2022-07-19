import { useContext } from "react"

import Header from "../../components/Header/Header"
import BeerCard from "../../components/BeerCard/BeerCard"
import NoDrinkMessage from "../../components/NoDrinkMessage/NoDrinkMessage"

import { CasamentoContext } from "../../contexts/CasamentoContext"

function Casamento(){

    const { casamentoList } = useContext(CasamentoContext)

    return(
        <>
            <Header/>
            <h2 className="pageTitle">Casamento</h2>
            <h3 className="listTitle">Lista de bebidas</h3>
            {casamentoList.length > 0? (
                <ul className="beerList">
                {casamentoList?.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} type="casamento"/>
                ))}

                </ul>
            ) : (
                <NoDrinkMessage/>
            )}   
        </>
    )
}

export default Casamento