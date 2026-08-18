class MyFieldsPage {
    selectorsList() {
        const selectors = {
            customField: '.oxd-select-text-input',
            testField: '[options=""]',
            saveButton: '[type="submit"]',
        }
        return selectors
    }

    fillCustomFields(testValue) {
        cy.get(this.selectorsList().customField).eq(2).click()
        cy.get('[role="option"]').contains('A-').click()
        cy.get(this.selectorsList().testField).clear().type(testValue)
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyFieldsPage