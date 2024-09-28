describe('interacciones con el navegador', () => {
  it('Target _Blank + pop over', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/solapa.html')
      cy.get('#mi-enlace').should('have.attr', 'target', '_blank')
      cy.get('#mi-enlace').should('have.attr', 'href', 'popover.html')
      cy.get('#mi-enlace').invoke('attr', 'target', '_self')
      cy.wait(2000)
      cy.get('#mi-enlace').click()
      cy.wait(2000)
      cy.get('#mi-boton').click()
      cy.get('#mi-popover > p').should('have.text', 'Contenido del Popover')
        cy.wait(2000)
      cy.get('#close-popover').click()

  })
})
