import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
 
  const selectorList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    GenericField: '.oxd-input--active',
    GenericDateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseField: '.--close',
    RegistrationDetailsField: '[clear="false"]',
    SaveButton: '[type="submit"]',
    
    // Custom Fields
    CustomField: '.oxd-select-text-input',
    Test_field: '[options=""]',

    // Attachments
    AddAttachmentButton: '.oxd-button--text',
    AttachmentFileField: 'input[type="file"]',
    AttachmentCommentField: '.oxd-textarea',
    AttachmentSaveButton: '.oxd-button',
  }
  
  it.only('User Info Update - Success', () => {
    
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    
    // My Info
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('PrimeiroTeste')
    cy.get(selectorList.middleNameField).clear().type('SegundoTeste')
    cy.get(selectorList.lastNameField).clear().type('TerceiroTeste')
    cy.get(selectorList.GenericField).eq(3).clear().type(54162)
    cy.get(selectorList.GenericField).eq(4).clear().type(98765)
    cy.get(selectorList.GenericField).eq(5).clear().type(736843)
    cy.get(selectorList.GenericDateField).eq(0).clear().type('2030-05-10')
    cy.get(selectorList.dateCloseField).click()
    cy.get(selectorList.RegistrationDetailsField).eq(0).click()
    cy.get('[role="option"]').contains('Brazilian').click()
    cy.get(selectorList.RegistrationDetailsField).eq(1).click()
    cy.get('[role="option"]').contains('Married').click()
    cy.get(selectorList.GenericDateField).eq(1).clear().type('2000-08-05')
    cy.get(selectorList.dateCloseField).click()
    cy.get(selectorList.SaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

    // Custom Fields
    cy.get(selectorList.CustomField).eq(2).click()
    cy.get('[role="option"]').contains('A-').click()
    cy.get(selectorList.Test_field).clear().type(762)
    cy.get(selectorList.SaveButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Updated')

    // Attachments
    cy.get(selectorList.AddAttachmentButton).click()
    cy.get(selectorList.AttachmentFileField).selectFile('cypress/fixtures/QA-Best-Practices.jpg', { force: true })
    cy.get(selectorList.AttachmentCommentField).type('Aprendendo cada vez mais sobre Cypress')
    cy.get(selectorList.AttachmentSaveButton).eq(3).click()
    cy.get('body').should('contain', 'Successfully Saved')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})