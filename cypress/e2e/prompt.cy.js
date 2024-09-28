describe('interacciones con el navegador', () => {
  it('Prompt', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/prompt.html')
      cy.window().then(win => {
        cy.stub(win,'prompt').returns('Mariana');
      })
      cy.get("#mi-boton").click()
      cy.get('#mensaje').should('have.text',"El nombre indicado fue: Mariana")
  })
})
