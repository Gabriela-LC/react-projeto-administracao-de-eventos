import { createContext, useState } from "react";
import { toast } from 'react-toastify'


export const ConfraternizacaoContext = createContext([])

export function ConfraternizacaoProvider({children}){

    const [confraternizacaoList, setConfraternizacaoList] = useState(JSON.parse(localStorage.getItem("confraternizacao")) || [])

    function addToConfraternizacao(beer){

        const foundBeer = confraternizacaoList.find((beerFromList) => {
            return beerFromList.id == beer.id
        })

        if(foundBeer){
            toast.error('Você já adicionou esta cerveja na lista de confraternização', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        } else{
            setConfraternizacaoList([beer, ...confraternizacaoList])
            localStorage.setItem("confraternizacao", JSON.stringify([beer, ...confraternizacaoList]))
            toast.success('Cerveja adicionada', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    return(
        <ConfraternizacaoContext.Provider value={{confraternizacaoList, setConfraternizacaoList, addToConfraternizacao}}>
            {children}
        </ConfraternizacaoContext.Provider>
    )


}