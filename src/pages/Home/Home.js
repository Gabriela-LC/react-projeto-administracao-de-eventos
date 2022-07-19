import { useEffect, useState } from "react"
import axios from "axios"

import Header from "../../components/Header/Header"
import BeerCard from "../../components/BeerCard/BeerCard"

import "./style.css"


function Home(){

    const [beers, setBeers] = useState([])

    useEffect(() => {

        axios.get("https://api.punkapi.com/v2/beers")
            .then((res) => setBeers(res.data))
            .catch((err) => console.log(err))

    }, [])

    return(
        <>
            <Header/>
            <h2 className="pageTitle">Home</h2>
            <h3 className="listTitle">Lista de bebidas</h3>
            <ul className="beerList">
                {beers?.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} onHome/>
                ))}

            </ul>
        </>
    )
}

export default Home