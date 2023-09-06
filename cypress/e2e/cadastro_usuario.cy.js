import { faker } from '@faker-js/faker';

import cadastro_page from '../support/pages/cadastro_usuario_page'
import commum_page from '../support/pages/commum_page'



describe ('Cadastro de usuario',() =>{

beforeEach ('Acessar cadastro de usuário', () => {
commum_page.acessarCadastrousuario()
})
    it ('Campo nome vazio',() =>{
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')


    })
    
    
    it('Campo email vazio',() =>{
  

cadastro_page.preencheNome('Vitor')
cadastro_page.clicarCadastrar()
cadastro_page.validarMensagemErro ('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email invalido',() =>{
        cadastro_page.preencheNome('vitor')
        cadastro_page.preencheEmail('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro ('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo password vazio',() =>{
        cadastro_page.preencheNome('vitor')
        cadastro_page.preencheEmail('vitor@sensedia.com')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro ('O campo senha deve ter pelo menos 6 dígitos')
    })

    it ('Campo senha invalido',() =>{
        cadastro_page.preencheNome('vitor')
        cadastro_page.preencheEmail('vitor@sensedia.com')
        cadastro_page.preencherSenha('126')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro ('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso',() =>{
        const nome = process.env.NOME_RECORD_KEY
        cadastro_page.preencheNome(nome)
        cadastro_page.preencheEmail('vitor@sensedia.com')
        cadastro_page.preencherSenha('123456')
        cadastro_page.clicarCadastrar()
    // cadastro_page.validarMensagemSucesso('vitor')
    })


    })