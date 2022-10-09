import {useState} from 'react';



function TrabalheConosco() {
    function cadastrarUsuario(e) {
	e.preventDefault()
	alert(`${name} Cadastrado!`)
    }

const [name, setName] = useState()
return (
	<div>
        <img src='https://cdn-icons-png.flaticon.com/512/1177/1177437.png' width={'50px'} height={'50px'}/>
	<h1>Cadastre seu email para novas Informações:</h1>
	<form onSubmit={cadastrarUsuario}>
		<div>
            
		<input 
        type="text" 
        placeholder="Digite o seu email" onChange={(e) => setName(e.target.value)}/>
		</div>
		<div>
		<input type="submit" value="Cadastrar" />
		</div>
	</form>
	</div>
)
}

export default TrabalheConosco