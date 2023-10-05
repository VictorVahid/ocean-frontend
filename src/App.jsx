import './App.css'
import Card from './components/Card/Card'

function App() {
  const personagem1 = {
    nome: 'Hawkeye',
    imagemUrl:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f5/Hawkeye_Char_Poster.jpg/revision/latest?cb=20211118181820'
  }
  const personagem2 = {
    nome: 'Kate Bishop',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/3/31/Kate_Bishop_Character_Poster.jpg/revision/latest?cb=20220628042411&path-prefix=pt'
  }
  const personagem3 = {
    nome: 'Kate Bishop',
    imagemUrl:'https://static.wikia.nocookie.net/universocinematograficomarvel/images/5/52/Yelena_Belova.jpg/revision/latest?cb=20220712135207&path-prefix=pt'
  }
  return (
    <>
      <Card item= {personagem1}/>
      <Card item= {personagem2}/>
      <Card item= {personagem3}/>
    </>
  )
}

export default App


// O problema do layout é que os cards ficam indo um abaixo do outro 