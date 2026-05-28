export default async function authLogin(email, senha) {
  try {
    console.log('Email:', email)
    console.log('Senha:', senha)

    // Exemplo de request
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        senha
      })
    })

    const data = await response.json()
    return data
    

  } catch (error) {
    console.error('Erro no login:', error)
  }
}