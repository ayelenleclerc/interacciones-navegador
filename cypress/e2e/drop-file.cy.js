describe('interacciones con el navegador', () => {
  it('Drag&Drop', () => {
    cy.visit('https://www.institutoweb.com.ar/test/drag_file.html')
      const dataTransfer = new DataTransfer()
      
      //Si el archivo NO esta en alguna carpeta del proyecto SI o SI va la ruta Absoluta
      cy.get('#dropArea').selectFile('C:/Users/ayele/Downloads/may27.pdf',{action: 'drag-drop'})
      //Si el archivo SI esta en alguna carpeta del proyecto va la ruta Relativa
      cy.get('#dropArea').selectFile('./cypress/fixtures/example.json',{action: 'drag-drop'})
  })
})