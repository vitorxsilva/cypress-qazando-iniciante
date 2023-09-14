import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'

describe ('Login',() =>{

    beforeEach ('Acessar tela de login', () => {
        commum_page.acessarCadastrousuario()
        })

it ('Login com campo nome vazio',() =>{
commum_page.acessarTelaLogin()
login_page.clicarLogin()
login_page.validarMensagemErro('E-mail inválido.')
})

})