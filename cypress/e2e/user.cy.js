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
    NacionalityField: '.oxd-select-text-input',
    BotonSave: '[type="submit"]'
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
    cy.get(selectorList.GenericDateField).eq(0).clear().type('2030-05-23')
    cy.get(selectorList.dateCloseField).click()
    cy.get(selectorList.NacionalityField).eq(0).click().get('[role="option"]').contains('Brazilian').click()
    cy.get(selectorList.GenericDateField).eq(1).clear().type('2000-09-12')
    cy.get(selectorList.dateCloseField).click()
    cy.get(selectorList.BotonSave).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})