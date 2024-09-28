describe('interacciones con el navegador', () => {
  it('Descargar archivo del navegador', () => {
      cy.visit('https://httpd.apache.org/download.cgi')
      cy.get('#apcontents > ul:nth-child(11) > li:nth-child(1) > p > a:nth-child(1)').click()
  })
})