import '../App.css'

function Informações() {
    return (
        <div className='Informações'>
            <section className='fundoI'>
                <div className='fundoJ'>
                    <center><h1>Quem somos</h1></center>
                    <a target={'_blank'} href='https://github.com/GabrielSouzaArcane'><img className='fundoJ2' src='https://avatars.githubusercontent.com/u/97127430?s=400&u=776731b54a03f544443d5fa8b379b6c48f743646&v=4' /></a>
                    <div className='fundoJ3'>
                        <p>
                        Olá, Meu nome é Gabriel Souza,<br/>
                        faço parte do <a target={'_blank'} href=''> Instituto Proa</a> no qual
                        curso Desenvolvimento em Web. Sou fundador dessa projeto que no caso é 
                        uma atividade do curso que é realizar um página fictícia tendo 5 rotas
                        sendo: Home, atendimento, históra, quem somos e Trabalhe conosco. 
                        </p>
                      
                    </div>
                   <center> <h3>Contato direto</h3>
                    
                    <a  target={'_blank'} href='https://api.whatsapp.com/send/?phone=5581989269109&text&type=phone_number&app_absent=0'><img src='https://th.bing.com/th/id/R.f67d411b7f39b7e81eae5931b4b4ca3a?rik=mxTLyNW%2blcT62g&pid=ImgRaw&r=0' width={'50px'}/></a>
                    <a  target={'_blank'} href='https://www.instagram.com/gabriel.u_u.souza/'><img src='https://www.ristoranteallavigna.com/img/instagram-icon.png' width={'50px'}/></a>
                    <a  target={'_blank'} href='https://www.linkedin.com/in/gabriel-souza-313570250/'><img src='https://valtre.com/wp-content/uploads/2021/07/social-media-2-e1626388865323-300x298.png' width={'50px'}/></a>
</center>
                </div>

            </section>
        </div>
    )
}
export default Informações