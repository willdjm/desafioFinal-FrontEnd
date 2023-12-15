// ATENÇÃO! ESTE RECURSO ESTÁ EM CRONSTRUÇÃO PARA SER ADICIONADO AO SITE.

import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext({})

export function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState(JSON.parse(localStorage
        .getItem`@foodexplorer:favorites`)) || []

    function addProductFavorite(data){
        setFavorites([... favorites, data])
    }

    function removeProductFavorite(data){
        setFavorites(favorites.filter((product) => product.id !== data.id))
    }

    useEffect(() => {

         localStorage.setItem(`@foodexplorer:favorites`, JSON.stringify(favorites))
         }, [favorites])

        return(
            <FavoritesContext.Provider value={{
                favorites,
                addProductFavorite,
                removeProductFavorite,
            }}>
                {children}
            </FavoritesContext.Provider>
        )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    return context
}
