import { Container } from "./styles";

import Lettuce from "../../assets/alface.png";
import Plum from "../../assets/ameixa.png"
import Almonds from "../../assets/amendoas.png"
import Anise from "../../assets/aniz.png";
import Coffee from "../../assets/cafe.png";
import Shrimp from "../../assets/camarao.png";
import LowerLeg from "../../assets/canela.png";
import EggWhites from "../../assets/claras.png"
import Damascus from "../../assets/damasco.png"
import Flour from "../../assets/farinha.png"
import Lemon from "../../assets/limao.png";
import Apple from "../../assets/maca.png";
import PassionFruit from "../../assets/maracuja.png";
import Pasta from "../../assets/massa.png";
import Bread from "../../assets/pao.png";
import BreadNaan from "../../assets/paonaan.png";
import Cucumber from "../../assets/pepino.png";
import Peach from "../../assets/pessego.png"
import Pesto from "../../assets/pesto.png";
import Ham from "../../assets/presunto.png";
import Radish from "../../assets/rabanete.png";
import Arugula from "../../assets/rucula.png";
import Tomato from "../../assets/tomate.png";
import Whiskey from "../../assets/whiskey.png";
import NoImage from "../../assets/noimage.gif";

export function Ingredients({ ingredient }) {
  function fetchImageIngredient(name) {

    let ingredient = name.toLowerCase().trim()
    
    let imageIngredient;
    
    if (ingredient == "alface") {
      return imageIngredient = Lettuce
      
    } else if (ingredient == "ameixa") {
      return imageIngredient = Plum

    } else if (ingredient == "amêndoas") {
      return imageIngredient = Almonds

    } else if (ingredient == "aniz") {
      return imageIngredient = Anise  

    } else if (ingredient == "café") {
      return imageIngredient = Coffee

    } else if (ingredient == "camarão") {
      return imageIngredient = Shrimp

    } else if (ingredient == "canela") {
      return imageIngredient = LowerLeg
      
    } else if (ingredient == "claras") {
      return imageIngredient = EggWhites 

    } else if (ingredient == "damasco") {
      return imageIngredient = Damascus

    } else if (ingredient == "farinha") {
      return imageIngredient = Flour

    } else if (ingredient == "limão") {
      return imageIngredient = Lemon

    } else if (ingredient == "maçã") {
      return imageIngredient = Apple

    } else if (ingredient == "maracujá") {
      return imageIngredient = PassionFruit

    } else if (ingredient == "massa") {
      return imageIngredient = Pasta

    } else if (ingredient == "pão") {
      return imageIngredient = Bread

    } else if (ingredient == "pão naan") {
      return imageIngredient = BreadNaan

    } else if (ingredient == "pepino") {
      return imageIngredient = Cucumber

    } else if (ingredient == "pêssego") {
      return imageIngredient = Peach

    } else if (ingredient == "pesto") {
      return imageIngredient = Pesto

    } else if (ingredient == "presunto") {
      return imageIngredient = Ham

    } else if (ingredient == "rabanete") {
      return imageIngredient = Radish

    } else if (ingredient == "rúcula") {
      return imageIngredient = Arugula

    } else if (ingredient == "tomate") {
      return imageIngredient = Tomato

    } else if (ingredient == "whiskey") {
      return imageIngredient = Whiskey
   
    } else {
      return imageIngredient = NoImage
    }}
  
  let imageIngredient = fetchImageIngredient(ingredient)
  
    return (
      <Container>
        <img src={imageIngredient} alt="Imagens dos ingredientes do seu prato." />
        <span className="nameIngredient">{ingredient}</span>
      </Container>
    );
  }