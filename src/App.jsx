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
    tags:["oi TINHA"]
  }
  const personagem3 = {
    nome: 'Yelena Belova',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/5/52/Yelena_Belova.jpg/revision/latest?cb=20220712135207&path-prefix=pt',
    tags:["vadia sai da daqui sua puitaaaa"]
  }

  //array (usa-se [])
  const personagens = [personagem1,personagem2,personagem3]

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


