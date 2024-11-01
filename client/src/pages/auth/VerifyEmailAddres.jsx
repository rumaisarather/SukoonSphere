import customFetch from "@/utils/customFetch"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const VerifyEmailAddres = () => {

const [error, setError] = useState(false)
const [loading, setLoading] = useState(false);
const query = useQuery()


const verifyToken  = async () => {
setLoading(true)

try {
   const { data } = await customFetch.post("/auth/verify-email", {
     verificationToken: query.get("token"),
     email: query.get("email"),
   });
   console.log({datafrombeackend:data})
}
 catch (error) {
    setError(true)
}
setLoading(false)
}
 
useEffect(()=>{
    verifyToken()
},[])
if (loading){
    return(
        <div>
            <h2>Loading...................</h2>
        </div>
    )
}
if(error) {
    return(
        <div>
            There was an error, please double check your verification link
        </div>
    )
}

return(
    <div>
        <h2>Acount confirmed</h2>
        <Link to="/login" className="primary-btn">
         Login</Link>
    </div>
)
}
export default VerifyEmailAddres