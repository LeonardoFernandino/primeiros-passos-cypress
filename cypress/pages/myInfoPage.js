class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            GenericField: '.oxd-input--active',
            GenericDateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseField: '.--close',
            RegistrationDetailsField: '[clear="false"]',
            SaveButton: '[type="submit"]',
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, thirdName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(lastName)
        cy.get(this.selectorsList().lastNameField).clear().type(thirdName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, DriversLicenseDate, DriversLicenseDate2) {
        cy.get(this.selectorsList().GenericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().GenericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().GenericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().GenericDateField).eq(0).clear().type(DriversLicenseDate)
        cy.get(this.selectorsList().dateCloseField).click()
        cy.get(this.selectorsList().GenericDateField).eq(1).clear().type(DriversLicenseDate2)
        cy.get(this.selectorsList().dateCloseField).click()
    }

    saveForm() {
        cy.get(this.selectorsList().SaveButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyInfoPage