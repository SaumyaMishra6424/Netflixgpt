
import React from 'react';  
import logo from './img.jpeg';  
import { signOut } from "firebase/auth";  
import { useNavigate } from "react-router-dom";  
import { auth } from "../utils/firebase";  


const Header = ({ showUserOptions }) => {  
   const navigate = useNavigate();  

   const handleSignOut = () => {  
       signOut(auth)  
           .then(() => {  
                navigate("/");  
           })  
          .catch((error) => {  
              navigate("error");  
          });  
    };  
   const handleGptSearchClick=()=>{

    navigate("/GptSearch");
   

}
   return ( 
     

       <div style={{  
          display: 'flex',  
           justifyContent: 'space-between',  
           alignItems: 'center',  
           padding: '10px 20px'  
       }}>  
           <img   
               src={logo}   
               alt="Project Logo"   
               style={{ height: '40px' }}   
         />  
          {showUserOptions && (  
               <div style={{  
                   display: 'flex',  
                   alignItems: 'center'  
                }}> 
           
<span  
onClick={handleGptSearchClick}    
          style={{  
                       color: 'red',  
                      cursor: 'pointer',  
                        fontSize: '16px',  
                       display: 'inline-block',  
                       textDecoration: 'underline',  
                       marginRight: '15px'  
                   }}  
                >  
                    GPT Search
               </span>   


                   <img  
                       alt="user icon"  
                       src="https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6"  
                       style={{ height: '40px', width: '40px', marginRight: '10px' }}   
                   />  
                  <button  
  onClick={handleSignOut}  
  style={{  
   backgroundColor: '#ff4081',  
   color: 'white',  
   cursor: 'pointer',  
 transition: 'background-color 0.3s',  
    padding: '10px 20px',  
   border: 'none',         
    borderRadius: '5px',     
    fontSize: '16px'        
  }}  
>  
  Sign Out  
</button>  
                      
             </div>  
           )}  
       </div>  
);  
};  

export default Header;  



