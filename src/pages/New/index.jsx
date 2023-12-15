import { Container, Form } from "./styles";
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { NewItem } from '../../components/NewItem'
import { Link } from "react-router-dom";

import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import ImgBack from '../../assets/back.svg'
import Upload from '../../assets/upload.svg'

export function New(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState(0)

    const [category, setCategory] = useState("");
    const [avatarFile, setAvatarFile] = useState(null);

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1);
      }

    function handleAddIngredients(){
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
       
    }

    function handleRemoveIngredients(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleNewProduct(event){

        event.preventDefault()

        if(!title){
            return alert("Você precisa informar o nome do produto.")
        }
        if(!category){
            return alert("Você precisa informar uma categoria.")
        }
        if(!value){
            return alert("Você precisa informar o valor do produto.")
        }
        
        if(newIngredients){
            return alert("você deixou um ingrediente no campo sem adicionar, clique no + para adicionar ou deixe o campo vazio.")
        }

        const formData = new FormData()
        formData.append("avatar", avatarFile)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("value", value)

        for (let i = 0; i < ingredients.length; i += 1) {
            formData.append("ingredients", ingredients[i]);
        }

        await api.post("/products", formData)
        alert("Produto adicionado com sucesso!")
        navigate("/")
    }

    return(
        <Container>
            <HeaderAdmin />
            <main>
                <div className="main">
                <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link onClick={handleBack}>voltar</Link>
                </div>
                <Form>
                    <h1>Adicionar prato</h1>
                    <div className="nameImage">
                        <div className="image">
                            <span>Imagem do prato</span>
                            <div className="inputImage">
                            <label htmlFor="imageUpload">Selecione imagem</label>
                            <img src={Upload} alt="" />
                            <Input
                                    id="imageUpload"
                                    type="file"
                                    placeholder="Selecione imagem"
                                    onChange={ e => setAvatarFile(e.target.files[0])}
                                />

                            </div>
                            
                        </div>
                        <div className="name">
                            <span>Nome</span>
                            <div className="input">
                                <Input
                                    type="text"
                                    placeholder="Ex.: Salada Ceasar"
                                    maxLength={40}
                                    onChange={ e => setTitle(e.target.value)}
                                />
                                
                            </div>
                        </div>
                        <div className="category">
                            <span>Categoria</span>
                            <div className="inputCategory">
                                <select name="category" value={category} onChange={ e => setCategory(e.target.value)}>     
                                    <option value="Selecionar">Selecionar</option>
                                    <option value="Pratos">Pratos</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                    <option value="Bebidas">Bebidas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ingredientsPrice">
                        <div className="ingredients">
                            <span>Ingredientes</span>
                            <div className="item">
                                {
                                    ingredients.map((ingredient, index) => (
                                    
                                    <NewItem 
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={()=> handleRemoveIngredients(ingredient)}
                                    />
                                    ))
                                }
                                <NewItem 
                                    isNew 
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredients(e.target.value)}
                                    value={newIngredients}
                                    onClick={handleAddIngredients}
                                />
                            </div>
                            
                        </div>
                        <div className="price">
                            <span>Preço</span>
                            <div className="input">
                                <Input
                                    type="text"
                                    placeholder="Ex: 10,00"
                                    maxLength={9}
                                    onChange={ e => setValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <span>Descrição</span>
                        <div className="textarea">
                            <Textarea 
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                maxLength={90}
                                onChange={ e => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="add">
                        <button onClick={event => handleNewProduct(event)}> <p>Adicionar prato</p>  </button>
                    </div>

                </Form>
                </div>
            </main>
            <Footer/>
            
        </Container>
    )
}