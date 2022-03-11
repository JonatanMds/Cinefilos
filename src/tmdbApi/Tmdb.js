const api_Base = "https://api.themoviedb.org/3"
const api_key = "7f4036307af9ad9a12fc09c4f4974fa0"



const basicFetch = async(endpoint) =>{
    const response = await fetch(`${api_Base}${endpoint}`);
    const data = await response.json();
    return data 
}


export default {
    getHomeList: async () =>{
        return [
            {
                slug:"Tops da semana",
                title: "Tops da semana",
                item: await basicFetch(`/trending/movie/week?api_key=${api_key}`)
            },
        ]
    }
}