

describe('interacciones con el navegador', () => {
  it('alert', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/alerta.html')
    cy.on('window:alert', (texto) => {
      expect(texto).to.be.equal('Hola Mundo')
    })
    cy.get("#mi-boton").click()
  })
})