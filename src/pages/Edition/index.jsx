import { Container, Form } from "./styles";
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { FiUpload } from 'react-icons/fi'
import { NewItem } from '../../components/NewItem'
import { Link, useNavigate } from "react-router-dom";

import ImgBack from '../../assets/back.svg'

export function Edition(){
    return(
        <Container>
            <HeaderAdmin />
            <main>
                <div className="main">
                <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link to="/">voltar</Link>
                </div>
                <Form>
                    <h1>Editar prato</h1>
                    <div className="nameImage">
                        <div className="image">
                            <span>Imagem do prato</span>
                            <button><FiUpload size={24}/>Selecione imagem</button>
                        </div>
                        <div className="name">
                            <span>Nome</span>
                            <div className="input">
                                <Input/>
                            </div>
                        </div>
                    </div>
                    <div className="ingredientsPrice">
                        <div className="ingredients">
                            <span>Ingredientes</span>
                            <div className="item">
                            <NewItem value="Pão Naan"/>
                            <NewItem isNew placeholder="Adicionar"/>
                            </div>
                            
                        </div>
                        <div className="price">
                            <span>Preço</span>
                            <div className="input">
                                <Input
                                    type="ranger" min="0"
                                    placeholder="R$ 00,00"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="description">
                        <span>Descrição</span>
                        <div className="textarea">
                            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                        </div>
                    </div>
                    <div className="add">
                        <button> <p>Salvar alterações</p>  </button>
                    </div>
                </Form>
                </div>
            </main>
            <Footer/>
        </Container>
    )
}