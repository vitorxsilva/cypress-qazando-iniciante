export default {
acessarCadastrousuario(){
    cy.visit ('/')
    .get('#top_header')

cy.get ('.fa-lock')
.click()
},
acessarTelaLogin(){
    cy.visit ('/')
    .get('#top_header')

cy.get ('.fa-user')
.click()
}
}