
import { useContext } from "react"
import { toast } from 'react-toastify'

import { CasamentoContext } from "../../contexts/CasamentoContext.js"
import { FormaturaContext } from "../../contexts/FormaturaContext.js"
import { StyledBeerCard } from "./styled.js"

function BeerCard({beer, onHome = false, type}){

    const {casamentoList, setCasamentoList, addToCasamento} = useContext(CasamentoContext)
    const {formaturaList, setFormaturaList, addToFormatura} = useContext(FormaturaContext)

    function removeFromList(){

        if(type === "casamento"){
            const newList = casamentoList.filter((beerOnList) => {
                return beerOnList.id != beer.id
            })

            setCasamentoList(newList)
            localStorage.setItem("casamento", JSON.stringify(newList))
        } else if(type === "formatura"){
            const newList = formaturaList.filter((beerOnList) => {
                return beerOnList.id != beer.id
            })

            setFormaturaList(newList)
            localStorage.setItem("formatura", JSON.stringify(newList))
        }

        toast.success('Cerveja removida', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return(
        <>
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
                {onHome? (
                    <>
                        <p>Adicionar ao evento:</p>
                        <button onClick={() => addToCasamento(beer)}>Casamento</button>
                        <button onClick={() => addToFormatura(beer)}>Formatura</button>
                        <button>Confraternização</button>
                    </>
                ) : (
                    <button onClick={removeFromList}>Remover</button>
                )}
                </div>
            
        </StyledBeerCard>
        </>
    )
}

export default BeerCard