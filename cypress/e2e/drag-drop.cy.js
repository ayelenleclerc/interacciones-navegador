describe('interacciones con el navegador', () => {
  it('Drag&Drop', () => {
    cy.visit('https://www.institutoweb.com.ar/test/drop_boton.html')
      const dataTransfer = new DataTransfer()

      cy.get('#draggable').trigger('dragstart', { dataTransfer })
      cy.get('#textarea1').trigger('drop', { dataTransfer })
      cy.wait(2000)
      cy.get('#draggable').trigger('dragstart', { dataTransfer })
      cy.get('#textarea1').trigger('drop', { dataTransfer })
      cy.wait(2000)
      cy.get('#draggable').trigger('dragstart', { dataTransfer })
      cy.get('#textarea1').trigger('drop', { dataTransfer })
  })
})
