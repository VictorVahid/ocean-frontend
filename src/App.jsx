import './App.css'
import Card from './components/Card/Card'

{/* <Tag text = "Status:Vivo" />
<Tag text = "Espécie:Humana" />
<Tag text = "Origem: Terra" /> */}

function App() {
  const personagem1 = {
    nome: 'Hawkeye',
    imagemUrl:'/hawk.webp',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem2 = {
    nome: 'Kate Bishop',
    imagemUrl:'/kate.webp',
    tags:['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem3 = {
    nome: 'Yelena Belova',
    imagemUrl:'/yelena.webp',
    tags:['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem4 = {
    nome: 'Echo',
    imagemUrl:'/echo.webp',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }

  //array (usa-se [])
  const personagens = [personagem1,personagem2,personagem3,personagem4]

  return (
    <>
    <div className="cards-list">
      {personagens.map(function(qualquerCoisa) {
        return <Card item={qualquerCoisa} />
      })}

    </div>
    </>
  )
}

export default App


