
const Header = (props) => {
    return ( 
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder fs-4 px-4" href="#">JiahaoY.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a  className={"nav-link px-4 "+ (props.selectedKey === 1 ? "active" : "")}
                            href="#about"
                            onClick={()=>props.onKey(1)}
                        >
                            Who I am
                        </a>
                        <a  className={"nav-link px-4 "+ (props.selectedKey === 2 ? "active" : "")}
                            href="#work"
                            onClick={()=>props.onKey(2)}
                        >                            
                            Experience
                        </a>
                        <a  className={"nav-link px-4 "+ (props.selectedKey === 3 ? "active" : "")}
                            href="#art"
                            onClick={()=>props.onKey(3)}
                        >     
                            Art
                        </a>
                        <a  className={"nav-link px-4 "+ (props.selectedKey === 4 ? "active" : "")}
                            href="#life"
                            onClick={()=>props.onKey(4)}
                        >                           
                            Life
                        </a>
                        <a  className={"nav-link px-4 "+ (props.selectedKey === 5 ? "active" : "")}
                            href="#contact"
                            onClick={()=>props.onKey(5)}
                        >                                
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;