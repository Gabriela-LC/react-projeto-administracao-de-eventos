import { useContext } from "react"

import Header from "../../components/Header/Header"
import BeerCard from "../../components/BeerCard/BeerCard"
import NoDrinkMessage from "../../components/NoDrinkMessage/NoDrinkMessage"

import { ConfraternizacaoContext } from "../../contexts/ConfraternizacaoContext"


function Confraternizacao(){

    const { confraternizacaoList } = useContext(ConfraternizacaoContext)

    return(
        <>
            <Header/>
            <h2 className="pageTitle">Confraternização</h2>
            <h3 className="listTitle">Lista de bebidas</h3>
            {confraternizacaoList.length > 0? (
                <ul className="beerList">
                {confraternizacaoList?.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} type="confraternizacao"/>
                ))}

                </ul>
            ) : (
                <NoDrinkMessage/>
            )}
        </>
        )
}

export default Confraternizacao