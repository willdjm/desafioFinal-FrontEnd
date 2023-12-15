import { Header } from '../../components/Header'
import { Container, ButtonReq } from './styles'
import { Footer } from '../../components/Footer'
import { ButtonRequest } from '../../components/ButtonRequest'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';

import { Ingredients } from "../../components/Ingredients"

import ImgBack from '../../assets/back.svg'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'

export function Product(){

    const [data, setData] = useState("")
    const params = useParams()
    
    const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

    const navigate = useNavigate()

    const [total, setTotal] = useState(1)

    function handleBack() {
        navigate(-1);
      }

      useEffect(() => {
        async function fetchProduct() {
          const response = await api.get(`/products/${params.id}`);
          setData(response.data);
        }
    
        fetchProduct();
      }, []);

    function addItem(){
        setTotal(prevState => prevState + 1)
    }
    function subItem(){

        if(total >= 2){
            setTotal(prevState => prevState - 1)
        }
    }

    function handleIncludeItem(){
        alert("Este recurso estará disponível em breve!")
    }

    return(
        <Container>
            <Header/>
            <div className="productPage">
                <div className="product">
                    <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link onClick={handleBack}>voltar</Link>
                    </div>
                    {data &&
                        <div className="item">
                            <div className="image">
                                <img src={avatarURL} alt="prato" height="390" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <span>{data.title}</span>
                                </div>
                                <div className="description">
                                    <span>{data.description}</span>
                                    
                                </div>
                                <div className="ingredients">
                                    {
                                        data.ingredients.map((ingredient) => (
                                        <Ingredients key={String(ingredient.id)} ingredient={ingredient.name} />
                                        ))
                                    }    
                                                            
                                </div>
                                <div className="request">
                                    <div className="value">
                                        <span>R$</span>
                                        <span>{data.value}</span>
                                    </div>
                                    <div className="requestItem">
                                        <button onClick={subItem}><img src={sub}/> </button>
                                        <label>{total.toString().padStart(2, "0")}</label>
                                        <button onClick={addItem}><img src={add}/> </button>
                                        <ButtonReq>
                                            <ButtonRequest onClick={handleIncludeItem} name="incluir"/>
                                        </ButtonReq>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </Container>
    )
}