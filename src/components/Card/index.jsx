import { useState } from "react"
import { Container, ButtonAdd } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'

import { Button } from "../Button"

import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'

import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom';

export function Card({ data, ...rest }){

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`
    
    const [total, setTotal] = useState(1)

    const navigate = useNavigate();

    function handleProducts(id) {
        navigate(`/products/${id}`);
    }
    
    function handleFavoriteItem(){
        alert("Este recurso estará disponível em breve!")
      }

    function handleIncludeItem(){
        alert("Este recurso estará disponível em breve!")
    }

    function addItem(){
        setTotal(prevState => prevState + 1)
    }
    function subItem(){

        if(total >= 2){
            setTotal(prevState => prevState - 1)
        }
    }

    return(
        <Container {...rest}>
        
        <button onClick={handleFavoriteItem} className="fav"><MdFavoriteBorder size={25}/></button>
        <div className="item">
           <div className="image">
           <button onClick={() => handleProducts(data.id)}><img src={avatarURL}/></button>
           </div>
           <div className="name"><button onClick={() => handleProducts(data.id)}>{data.title} {String(">")}</button></div>
           <div className="info">{data.description}</div>
           <div className="price">
                <span>R$</span>
                <span>{data.value}</span>
           </div>
           <div className="request"> 
           
                <button onClick={subItem}><img src={sub}/> </button>
                <span>{total.toString().padStart(2, "0")}</span>
                <button onClick={addItem}><img src={add}/> </button>
                
                <ButtonAdd>
                    <Button name="Incluir" onClick={handleIncludeItem}/>
                </ButtonAdd>   
           </div>

        </div>
        
            

        </Container>
        
    )
}