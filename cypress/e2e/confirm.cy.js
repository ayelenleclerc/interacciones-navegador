
describe('interacciones con el navegador', () => {
  it('Confirm', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/confirmacion.html')
    cy.on('window:confirm', (texto) => {
        expect(texto).to.be.equal('¿Estás seguro?')
        //return true
        return false
    })
      cy.get("#mi-boton").click()
      //cy.get('#mensaje').should('have.text', 'Hiciste clic en Aceptar')
      cy.get('#mensaje').should('have.text','Hiciste clic en Cancelar')
  })
})
