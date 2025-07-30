export class Assertions {

  static expectElementToHavelength(locator, element, value) {
    cy.get(locator).find(element).should('have.length', value);
  }

  static expectElementToHaveText(locator, element, text) {
    cy.get(locator).find(element).should('contain.text', text);
  }

  static expectElementToExist(locator) {
    cy.get(locator).should('exist');
  }

  static expectTotalSongsDuration(locator, element, durationElem) {
    let totalSeconds;
    cy.get(locator)
      .find(element)
      .then(($durations) => {
        totalSeconds = Cypress._.sum(
          Cypress._.map($durations, (el) => {
            const [min, sec] = el.innerText.trim().split(':').map(Number);
            return min * 60 + sec;
          })
        );

        cy.get(durationElem)
          .invoke('text')
          .then((displayedDuration) => {
            expect(displayedDuration.trim()).to.eq(`${totalSeconds}`);
          });
      });
  }
}