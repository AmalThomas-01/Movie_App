import {Link} from "react-router-dom"

const Navbar=(props)=>{
    return(
       <div style={{ backgroundColor: 'var(--highlight-bg)', color: 'var(--highlight-text-color)', borderRadius: 'var(--border-radius)', padding: '1rem' }}>

        <Link to="/" style={{ marginRight: '1100px' }}>
        
            <i className="pi pi-home" style={{ fontSize: '1.5rem' }}></i>
        </Link>
        
        
        <Link to="/pricing" style={{ marginRight: '75px' }}>
            <i className="pi pi-money-bill" style={{ fontSize: '1.5rem' }}></i>
        </Link>
        <Link to="/about"style={{ marginRight: '75px' }}>
        <i className="pi pi-question" style={{ fontSize: '1.5rem' }}></i>
        </Link>
        <Link to="/loginpage">
        
            <i className="pi pi-user " style={{ fontSize: '1.5rem' }}></i>
        </Link>
        </div>
    )
}

export default Navbar;