Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    text: 'Testes!'
}) => {
    const longText = Cypress._.repeat(data.text, 15)
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(longText)
    cy.get('button[type="submit"]').click()
})