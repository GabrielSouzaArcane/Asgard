import { Link } from 'react-router-dom'
import '../App.css'

function Menu (){
    return(
        <div>
         
            <ul className='Lista'>
                <li className='ListaB'><Link className='ListaC' to="/Home">   <img className='Logo' src='https://cdn-icons-png.flaticon.com/512/297/297839.png'/></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/Home">Home</Link></li>
                <li className='ListaB'><Link className='ListaC' to="/Horario">Agende já</Link></li>
                <li className='ListaB'><Link className='ListaC' to="/Historia">Historia</Link></li>
                <li className='ListaB'><Link className='ListaC' to="/Informações">Quem somos </Link></li>
                <li className='ListaB'><Link className='ListaC' to="/Trabalho">Trabalho conosco</Link></li>

            </ul>
        </div>
    )
}
export default Menu