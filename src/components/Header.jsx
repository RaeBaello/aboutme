import { Link } from 'react-router-dom'

function Header(){

    return(
        <nav className="navbar">
            <img src='./src/assets/react.svg' className="nav--logo"></img>
            <h1 className="nav--name">Rae Mari Lennard Baello</h1>
            <h3 className="nav--email">Email:raebaello@gmail.com</h3>
            <img src="./src/assets/linkedinlogo.png" className="nav--linkedinlogo"></img>
            <a className='nav--linkedIn' href='https://www.linkedin.com/in/rae-mari-lennard-baello-ab7828266//' target='_blank'>LinkedIn</a>
        </nav>
    );
}

export default Header