import { createContext, useState } from "react";
import { toast } from 'react-toastify'


export const CasamentoContext = createContext([])

export function CasamentoProvider({children}){

    const [casamentoList, setCasamentoList] = useState(JSON.parse(localStorage.getItem("casamento")) || [])

    function addToCasamento(beer){

        const foundBeer = casamentoList.find((beerFromList) => {
            return beerFromList.id == beer.id
        })

        if(foundBeer){
            toast.error('Você já adicionou esta cerveja na lista de casamento', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        } else{
            setCasamentoList([beer, ...casamentoList])
            localStorage.setItem("casamento", JSON.stringify([beer, ...casamentoList]))
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
        <CasamentoContext.Provider value={{casamentoList, setCasamentoList, addToCasamento}}>
            {children}
        </CasamentoContext.Provider>
    )
}