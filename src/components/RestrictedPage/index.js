import './style.css'
export const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => (
    <div>
    {isLoggedIn ? (

         <div>
         <h2>Bem-vindo, {user}!</h2>
         <button className="Botao" onClick={()=> Logout()}>Sair</button>
        </div>
    )
    :
    (
        <div>
            <h2>Você não pode acessar essa página</h2>
            <button className="Botao" onClick={() => Login()}>Entrar</button>
        </div>
    )}
    </div>
);