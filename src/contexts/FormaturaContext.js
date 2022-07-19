import { createContext, useState } from "react";
import { toast } from 'react-toastify'

export const FormaturaContext = createContext([])

export function FormaturaProvider({children}){

    const [formaturaList, setFormaturaList] = useState(JSON.parse(localStorage.getItem("formatura")) || [])

    function addToFormatura(beer){

        const foundBeer = formaturaList.find((beerFromList) => {
            return beerFromList.id == beer.id
        })

        if(foundBeer){
            toast.error('Você já adicionou esta cerveja na lista de formatura', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        } else{
            setFormaturaList([beer, ...formaturaList])
            localStorage.setItem("formatura", JSON.stringify([beer, ...formaturaList]))
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
        <FormaturaContext.Provider value={{formaturaList, setFormaturaList, addToFormatura}}>
            {children}
        </FormaturaContext.Provider>
    )
}