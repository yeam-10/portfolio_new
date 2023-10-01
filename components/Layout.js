import { useRouter} from "next/router";
import Navbar from "./Navbar";
import { useEffect } from "react";
import NProgress from "nprogress";

const  Layout = ({ children })  =>     { 

    const router = useRouter ();

    const handleRouteChange = url => {
        console.log(url)
        NProgress.start();
    }

    useEffect(()=>{
        router.events.on('routeChangeStart', handleRouteChange)
  
        router.events.on('routeChangeComplete', () => NProgress.done());
  
  
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    
    },[]) 

  return (

   
<>

<Navbar/>

<main  className="container py-4">
{ children }

</main>



<footer className="bg-dark text-light text-center">
<div className="container p-4 ">
    <h1>&copy; Anyeimar Requena portfolio</h1>
    <p> 2017- {new Date().getFullYear()}</p>
    <p>All rights Reserverd.</p>
</div>

</footer>



</>


  )



 }


 export default Layout;

