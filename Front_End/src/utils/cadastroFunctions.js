    async function authCadastro() {
        try{
            const response = await api.post(
                '/auth/cadastro',
                {
                    nome,
                    email,
                    senha
                }
            )
            console.log(response.data)

            alert('Usuário criado')

            navigate('/Login')
        }catch(Vitor){
            console.log(Vitor)

            alert('Erro ao cadastrar')
        }
    }