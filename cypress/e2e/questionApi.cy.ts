describe('template spec', () => {
  it('passes', () => {
    cy.request({
      url: 'http://127.0.0.1:3001/api/questions/random',
      method: 'GET',
    });
  })
})