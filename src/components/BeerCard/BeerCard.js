
import { StyledBeerCard } from "./styled.js"

function BeerCard({beer}){

    return(
        <StyledBeerCard className="beerCard">
            <figure>
                <img src={beer.image_url} alt={`imagem da cerveja ${beer.name}`}/>
            </figure>
            <div className="cardInfo">
                <h4>{beer.name}</h4>
                <p>Data Inicio de fabricação: {beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>Quantidade: {beer.volume.value} litros</p>
            </div>
            <div className="cardButtons">
                <p>Adicionar ao evento:</p>
                <button id={beer.id}>Casamento</button>
                <button id={beer.id}>Formatura</button>
                <button id={beer.id}>Confraternização</button>
            </div>
        </StyledBeerCard>
    )
}

export default BeerCard