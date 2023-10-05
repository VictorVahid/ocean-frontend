import './App.css'
import Card from './components/Card/Card'

{/* <Tag text = "Status:Vivo" />
<Tag text = "Espécie:Humana" />
<Tag text = "Origem: Terra" /> */}

function App() {
  const personagem1 = {
    nome: 'Hawkeye',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/b/bb/Clint_Hawkeye.jpg/revision/latest?cb=20211229222209&path-prefix=pt',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem2 = {
    nome: 'Kate Bishop',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/3/31/Kate_Bishop_Character_Poster.jpg/revision/latest/scale-to-width-down/1000?cb=20220628042411&path-prefix=pt',
    tags:['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem3 = {
    nome: 'Yelena Belova',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/5/52/Yelena_Belova.jpg/revision/latest?cb=20220712135207&path-prefix=pt',
    tags:['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem4 = {
    nome: 'Echo',
    imagemUrl:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c2/Echo_Character_Poster.jpg/revision/latest?cb=20211209053238',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }
  const personagem5 = {
    nome: 'Natasha Romanoff',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/3/38/Nat_BW.jpg/revision/latest?cb=20211229224720&path-prefix=pt',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }

  const personagem6 = {
    nome: 'Susan/Vespa',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/2/22/Wasp_Quantumania.jpg/revision/latest?cb=20230121235142&path-prefix=pt',
    tags: ['Status:Vivo','Espécie:Humana','Origem: Terra']
  }

  //array (usa-se [])
  const personagens = [personagem1,personagem2,personagem3,personagem4,personagem5,personagem6]

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


