import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";



const Index = ()=> (
<Layout>
{/**Headers */}
<header className="row">
                <div className="col-md-12">
                        <div className="card card-body bg-secondary text-light">
                                <div className="row">
                                        <div className="col-md-4">
                                        <img src="anye.jpg" alt="" className="img-fluid" width="250" height="250"></img>
                                </div>
                                <div className="col-md-8">
                                        <h1>Anyeimar Requena</h1>
                                        <h3>Fullstack Desarrollador</h3>
                                        <p>Lorem orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                                        <a href="/hireme">Hire me</a>

                                </div>
                        </div>
                 </div>
        </div>

        </header>

         {/**Second Second */}
        
         <div className="row py-2">
          <div className="col-md-4">
                <div className="card bg-ligth">
                        <div className="card-body">
                                <h1>Skills</h1>
                                {
                                skills.map(({ skills, porcenge }, i) =>(
                                        <div className="py-3" key={i}><h5>{skills}</h5>
                                <div className="progress">
                                        <div className="progress-bar" 
                                        role="progressbar" 
                                        style={{ width: `${porcenge}%`}}></div>
                                </div>
                                </div>
                              
                                ))
                                }
                          

                        </div>

                </div>

          </div>
          <div className="col-md-8">
                <div className="card bg-ligth">
                        <div className="card-body">
                               
                         <h1>Experiencia</h1>
                         <ul> 
                        {
                        experiences.map(({title, from, to, description}, index) => (

                         <li key={index}>
                          <h3> {title}</h3>
                          <h5>{from}-{to}</h5>
                          <p>{description}</p>
                        </li>
                        ))
                        }
                         </ul>

                         <Link href="/experiences" passHref legacyBehavior>
                         <a className="btn btn-text-light"> Know More</a>
                         
                         </Link>
                                         
                           

                        </div>

                </div>


          </div>

        </div>

         
      {  /**Section Portfolio */}

<section>
<div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-dark">
      <div className="row">
        <div className="col-md-12 my-2">
          <h1 className="text-center text-light">Portfolio</h1>
        </div>
        {projects.map(({ name, description, image }, index) => (
          <div className="col-md-4 p-2" key={index}>
            <div className="card h-100">
              <div className="overflow">
                <img
                  src={`/${image}`}
                  alt=""
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h3>{name}</h3>
                <p>{description}</p>
                <a href="#!">Know More</a>
              </div>
            </div>
          </div>
        ))}

        <div className="col-md-12 mt-4">
          <div className="text-center">

          <Link href="/portfolio" passHref legacyBehavior>
                         <a className="btn btn-outline-light"> Know More</a>
                         
        </Link>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>



</Layout>

) 

export default Index;