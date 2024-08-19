import axios from "axios"
import { useEffect } from "react"


const FetchComponent=()=>{
   useEffect(()=>{
    fetchApi()
   },[])

    const fetchApi=async()=>{
    try {
        const {data}= await axios.get("http://localhost:8000/https://food.noon.com/_svc/mp-food-api-catalog/api/")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    }
    return(
            <div>

                <h1>Fetch</h1>
            </div>
    )
}

export default FetchComponent