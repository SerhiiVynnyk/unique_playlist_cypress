export class Actions {
  static clickElementContainsValue(locator, value) {
    cy.get(locator)
      .contains(value)
      .click();
  }

  static typeText(locator, value) {
    cy.get(locator)
      .click()
      .type(value);
  }

  static clickButtonByLocatorsByName(locator, element, value) {
    cy.get(locator).contains(element, value).parent().find('button').click();
  }
}