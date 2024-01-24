describe('Add two ladies watches and one smart watch to the cart and check cart items ', () => {
  it('passes', () => {
    cy.visit('https://www.watchshop.com/')
    cy.get('#GDPROverlayContent > [data-gdpr-action="ACCEPT"]').click()
    cy.get('#mega-menu-7 > .dropdown > .mobile-link').click()
    cy.get('[data-id="100044041"] > .col-ss-12 > .ajax > .btn')
    .click()
    .wait(5000)
    
    cy.get('[href="/watches/vivienne-westwood-exclusive-ladies-two-tone-orb-watch-vv006slsg.pdp"] > .img-fluid').click()
    cy.get('.buy-section > form > .btn').click().wait(2000)

    cy.get('.col-lg-8 > .continue-shopping > a > strong').click()

    cy.get('#mega-menu-10 > .dropdown > .mobile-link').click()
    cy.get('[data-id="100042631"] > .col-ss-12 > .ajax > .btn') .click().wait(2500)
    cy.get('.col-12 > .btn').click()
  })
})