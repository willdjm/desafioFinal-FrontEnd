import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Container, ButtonEdit, ButtonDelete } from './styles'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';

import { Ingredients } from "../../components/Ingredients"

import ImgBack from '../../assets/back.svg'

export function ProductAdmin(){

    const [data, setData] = useState("")
    const params = useParams()
    
    const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

    const navigate = useNavigate()

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover esse produto do site?")

        if(confirm){
            await api.delete(`/products/${params.id}`)
            alert("Produto excluído")
            navigate("/")
        }
    }

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

    return(
        <Container>
            <HeaderAdmin/>
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
                                        
                                        <ButtonEdit>
                                            <Link to="/edit/:id"><Button name="Editar prato"/></Link>
                                            
                                        </ButtonEdit>
                                        <ButtonDelete>

                                        <Link><Button 
                                                name="Excluir prato"
                                                onClick={handleRemove}
                                                />
                                        </Link>
                                        </ButtonDelete>
                                        
                                        
                                        
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