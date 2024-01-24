describe('Find black dial Seiko 5 Sport for men and then search and find blue and black bezel Seiko GMT', () => {
  it('passes', () => {
    cy.visit('https://www.watchshop.com/')
    cy.get('#GDPROverlayContent > [data-gdpr-action="ACCEPT"]').click()
    cy.get('#searchTextField').type('Seiko')
    cy.get('#searchButton').click()
    cy.get('[href="/watches/mens-seiko-5-sports-skx-midi-black-srpk29k1.pdp"] > .img-fluid').click()

    cy.get('#searchTextField').type('Seiko')
    cy.get('#searchButton').click()
    cy.get(':nth-child(1) > .overlayWrapper__container > :nth-child(1) > .mb-3').click()
    cy.get('.filter-mob > h5').click()
    cy.wait(2000)
    cy.get('.price-filter-wrapper > :nth-child(1) > .form-control').type('400')
    cy.get('.pr-4 > .btn').click()
    cy.get('[href="/watches/mens-seiko-5-sports-blueberry-gmt-skx-re-interpretation-watch-ssk003k1.pdp"] > .img-fluid').click()
  })
})