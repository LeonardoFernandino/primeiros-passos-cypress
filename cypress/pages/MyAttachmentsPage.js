class MyAttachmentsPage {
    selectorsList() {
        const selectors = {
            addAttachmentButton: '.oxd-button--text',
            attachmentFileField: 'input[type="file"]',
            attachmentCommentField: '.oxd-textarea',
            attachmentSaveButton: '.oxd-button',
            attachmentDeleteFileField: '.bi-trash',
            buttonLabelDangerField: '.oxd-button--label-danger',
        }
        return selectors
    }

    addAttachment(filePath, comment) {
        cy.get(this.selectorsList().addAttachmentButton).click()
        cy.get(this.selectorsList().attachmentFileField).selectFile(filePath, { force: true })
        cy.get(this.selectorsList().attachmentCommentField).type(comment)
        cy.get(this.selectorsList().attachmentSaveButton).eq(3).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

    deleteAttachment() {
        cy.get(this.selectorsList().attachmentDeleteFileField).eq(0).click()
        cy.get(this.selectorsList().buttonLabelDangerField).click()
    }
}

export default MyAttachmentsPage