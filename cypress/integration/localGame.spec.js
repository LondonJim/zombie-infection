describe('Local Game', () => {

  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('button:first').click()
    cy.get('button:first').click()
    cy.wait(5000)
    cy.get('.city-button-active:first').click()
  })

  it('shows the game title', () => {
    cy.get('p')
      .should('contain', 'London');
  });

  describe ('canvas accepts movement keys', () => {

    describe ('up', () =>  {
      it ('responds to w press for up', () => {
        cy.get('canvas').last().type('w')
      });
      it ('responds to up arrow press for up', () => {
        cy.get('canvas').last().type('↑')
      });
    });

    describe ('down', () =>  {
      it ('responds to s press for down', () => {
        cy.get('canvas').last().type('s')
      });
      it ('responds to down arrow press for down', () => {
        cy.get('canvas').last().type('↓')
      });
    });

    describe ('left', () =>  {
      it ('responds to a press for left', () => {
        cy.get('canvas').last().type('a')
      });
      it ('responds to left arrow press for down', () => {
        cy.get('canvas').last().type('←')
      });
    });

    describe ('right', () =>  {
      it ('responds to d press for right', () => {
        cy.get('canvas').last().type('d')
      });
      it ('responds to right arrow press for down', () => {
        cy.get('canvas').last().type('→')
      });
    });

    describe ('game timer end local game', () => {
      it ('responds to space bar to take user back to world map', () => {
        cy.wait(46000)
        cy.get('#holder').find('#local-game-over').contains('TIMES UP!')
      });
    });
  });
});
