import cadastroFunctions from '../../utils/cadastroFunctions.js'

export function cadastroCard({}) {
    return(
    <form>
        <h2>Faça seu cadastro para utilizar a plataforma</h2>
        <div>
            <Input placeholder="Nome" type="text" onChange={(e) => setNome(e.target.value)} />
            <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
        </div>
        <Button onClick={cadastrarUsuario}>Cadastrar</Button>
        <Button onClick={() => navigate('/Login')}>Voltar</Button>
    </form>
    )
}