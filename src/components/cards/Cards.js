
import styles from './Cards.module.css'

function Cards({item}){

    return(
        <div id="tops" className={styles.topsDaSemana}>
            <h1>Tops da semana</h1>
            <ul  className={styles.titles}>
                {item.map((lisItens, key)=>{
                    return(
                        <li key={key}>
                            <img src={`https://image.tmdb.org/t/p/original${lisItens.poster_path}`} />
                            <p>{lisItens.original_title}</p>
                        </li>
                    ) 
                })}  
            </ul>
        </div>
    )
}

export default Cards