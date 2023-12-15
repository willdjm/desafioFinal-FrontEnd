import { Container, Links, Main } from './styles'
import { Section } from '../../components/Section'
import { HeaderAdmin} from '../../components/HeaderAdmin'
import { CardAdmin } from '../../components/CardAdmin'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function HomeAdmin(){

  const [search, setSearch] = useState("")

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts(){
      const response = await api.get(
        `/products/?title=${search}`
      )
      setProducts(response.data)
    }
    fetchProducts()
  },[search])
 

  return(
    <Container>
      <HeaderAdmin setSearch={setSearch}/>
      <Banner/>
      <Main>  

        <div className="Cards">
              {products.filter(product => product.category == "Pratos").length > 0 &&
              <Section name="Pratos principais">
                {products.filter(products => products.category == "Pratos").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
        </div>

          <div className="Cards">
              {products.filter(product => product.category == "Sobremesas").length > 0 &&
              <Section name="Sobremesas">
                {products.filter(products => products.category == "Sobremesas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>

          <div className="Cards">
              {products.filter(product => product.category == "Bebidas").length > 0 &&
              <Section name="Bebidas">
                {products.filter(products => products.category == "Bebidas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
          </div>
          
      </Main>
      <Footer/>
    </Container>
  )
}

