
const Header = () => {
    return ( 
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder fs-4 px-4" href="#">JiahaoY.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active px-3" aria-current="page" href="#about">Who I am</a>
                        <a class="nav-link px-3" href="#work">Experience</a>
                        <a class="nav-link px-3" href="#art">Art</a>
                        <a className="nav-link px-3" href="#life">Life</a>
                        <a class="nav-link px-3" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;