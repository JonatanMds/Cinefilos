import Cards from '../../components/cards/Cards'
import Destaque from '../../components/destaque/Destaque'

function Home ({props}){

     return(
         <section>
            
            {
                props.map((items,key)=>{
                    
                    return (
                        <div key={key}>
                            <Destaque propsDestaques={items.item.results} />
                            <Cards item={items.item.results} />
                        </div>
                    )
                })
            }


         </section>
    )
}

export default Home