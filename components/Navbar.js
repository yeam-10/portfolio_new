import Link from 'next/link'

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/" passHref legacyBehavior>
                <a className="navbar-brand" >Portafolio </a>
            </Link>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link href="/blog" passHref legacyBehavior>
                        <a id="link" className="nav-link active" aria-current="page">Home</a>
                    </Link>
                    </li>
                    <li>
                        <Link href="/github" passHref legacyBehavior>
                            <a id="link" className="nav-link active" aria-current="page">Github</a>
                        </Link>
                    </li>
                  
               

                </ul>
            </div>



        </div>
    </nav>
)
export default Navbar;