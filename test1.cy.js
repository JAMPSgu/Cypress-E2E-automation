describe('test group', function(){
it('test 1', function(){
cy.visit('http://logofree.esy.es/');
cy.contains( 'Carrito' ).click();
})
})