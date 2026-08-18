import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MyFieldsPage from '../pages/MyFieldsPage.js'
import MyAttachmentsPage from '../pages/MyAttachmentsPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const myFieldsPage = new MyFieldsPage()
const myAttachmentsPage = new MyAttachmentsPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('firstName', 'lastName', 'thirdName')
    myInfoPage.fillEmployeeDetails('54162', '98765', '736843', '2030-05-10', '2000-08-05')
    myInfoPage.saveForm()

    // Custom Fields
    myFieldsPage.fillCustomFields('762')

    // Attachments
    myAttachmentsPage.addAttachment('cypress/fixtures/QA-Best-Practices.jpg', 'Aprendendo cada vez mais sobre Cypress')
    myAttachmentsPage.deleteAttachment()
  })

  it.only('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})