import { useSearchParams } from "react-router-dom";

function QueryString(params) {
   const [searchParams, setSearchParams] = useSearchParams()

   const name = searchParams.get("name")
   const city = searchParams.get("city")

   return (
      <div>
         Search for name= {name}
         Search for city= {city}
      </div>
   )
}

export default QueryString
