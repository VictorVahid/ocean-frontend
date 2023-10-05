import Tag from '../Tag/Tag';
import './Card.css'

 export default function Card(props) {
    const item = props.item;
    return(
        <div className="card">
            <h2>{item.nome}</h2>

        <div className="tag-list">
            <Tag text = "Status:Vivo" />
            <Tag text = "Espécie:Humana" />
            <Tag text = "Origem: Terra" />
        </div>




            <img src={item.imagemUrl} />
        </div> 
    )

}