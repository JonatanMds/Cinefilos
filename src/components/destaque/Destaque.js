import styles from './Destaque.module.css'
import VideoPlayer from 'react-video-js-player'
import MovePlay from '../../assets/video/Homem-Aranha_ Sem Volta Para Casa _ Trailer teaser oficial dublado _ 16 de dezembro nos cinemas.mp4'

function Destaque({propsDestaques}){


    const videoSrc = MovePlay;
    const poster = "https://tm.ibxk.com.br/2021/08/25/25160146781334.jpg?ims=1120x420"


    const topUm = propsDestaques[1]
     

    return(
        <section id="destaque" className={styles.destaque} style={{
            backgroundSize:"cover",
            backgroundPosition:"0% 35%",
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${topUm.poster_path})` 
        }}>
            <div className={styles.destaque_vertical}>    
                <div className={styles.destaque_horizontal}>         
            
                    <div className={styles.destaque_informacoes}>
                        <h1>{topUm.title}</h1>
                        
                        <div className={styles.destaque_average}>
                            <p>{topUm.vote_average}</p>
                        </div>
                        
                        <p>{topUm.overview} </p>
                        <button>Assistir Agora</button>
                    </div>

                    <div className={styles.video} >
                        <VideoPlayer className={styles.video} src={videoSrc} poster={poster} width="420" height="245" />    
                    </div>
                </div>
            </div>
            
            
            
        </section>
    )
}

export default Destaque