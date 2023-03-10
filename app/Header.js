import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";




const Header = () => {
  
  const {data} = useSession()
  console.log(data)

  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <a className="navbar-brand" style={{ marginLeft: "20px" }} href="#">
            Next.13 Authentication
          </a>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data?.user ? 
             <>
             
              <span style={{ marginRight: "15px" }}>
                
                <img src = {data.user.image} width="25" height="25" alt="user Img"/>
                Hi,[{data.user.name}]
                
              </span>
              
              <span style={{cursor : "pointer" }}  >
                {" "}
                
                <Link style={{textDecoration:'none' , color : "black" , marginRight : "10px" }} href="/dashboard">  Dashboard </Link>  
                
             </span>

             <span style={{cursor : "pointer"}} onClick={()=> signOut()} >
                {" "}
                
                  Logout
                
             </span>
   
            </>  : 
            
            
              <span style={{ marginRight: "15px" }}>
                {" "}
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </span>
            
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
