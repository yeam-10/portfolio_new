import Navbar from "./Navbar";
import Head from "next/head";

const  Layout = ({ children })  => 

<>

    <Navbar/>

    <main  className="container py-4">
    { children }
    
    </main>

    
 </>

 export default Layout;

