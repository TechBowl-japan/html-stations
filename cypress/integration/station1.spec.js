describe('Station1', function () {
    beforeEach(() => {  // functionの前に必ず実行される
        // baseUrlのrootへ
        cy.visit('/station1.html');
    });
    it('has HTML Tags', function () {
        cy.get('html')
            .should('be.visible')
    });
    it('Image Should have Alt', function () {
        cy.get('img')
            .should('have.attr', 'alt')

        cy.get('img')
            .should('have.attr', 'src')
    });
    it('Title Should Be P Tag', function () {
        cy.get('p')
            .should(($p) => {
                expect($p.first()).to.contain('タイトル')
            })
    });
});