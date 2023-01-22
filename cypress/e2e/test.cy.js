
// 4) make it dynamic 

describe('Mostly AI UI tests', () => {

  beforeEach(() => {

    cy.visit('https://mostly.ai/')
    cy.removeCookieBanner()

  });

  it('Verify visibility of all bookmarks', () => {

    cy.get('.oxy-mega-dropdown_link-text').each(($el) => {
      cy.wrap($el)
        .should('exist')
        .and('be.visible')
        .and('not.have.css', 'display', 'none')
    })

  })

  it('Verify search result with non existing data', () => {
    cy.get('.oxy-header-search_toggle-open')
      .click()
    cy.get('.oxy-header-search_search-field')
      .type('sythetic')
      .type('{enter}')

    cy.removeCookieBanner()

    cy.get('section.ct-section.search-results-header').eq(0).within(() => {
      cy.get('h1.ct-headline').contains('Sorry, no results for:').should('be.visible')
      cy.get('h1.ct-code-block').contains('sythetic').should('be.visible')
    })

  })

  it.only('should fill contact form and hover over send message button', () => {
      
    cy.get('span.oxy-mega-dropdown_link-text').contains('Company').trigger('mouseover')
    .then(() => {
      cy.get('div.oxy-mega-dropdown_container').contains('Contact').click({force: true})
    });

    cy.wait(1000)

    cy.removeCookieBanner()

    cy.get('.hbspt-form').should('be.visible')
               
    cy.get('.hbspt-form').find('input[name="firstname"]')  
      .type('John')
    cy.get('.hbspt-form').find('input[name="lastname"]')
      .type('Doe')
    cy.get('.hbspt-form').find('input[name="email"]')
      .type('teymurnasir@motlyai.com') 
    cy.get('.hbspt-form').find('input[name="mobilephone"]')
      .type('+994 51 541 90 47')
    cy.get('.hbspt-form').find('input[name="company"]')
      .type('MostlyAI')
    cy.get('.hbspt-form').find('select[name="country"]')
      .select('Azerbaijan')
    cy.get('.hbspt-form').find('textarea[name="message"]')
      .type('Lorem ipsum')
      
    cy.get('.hs-form-booleancheckbox-display').find('input')
      .check();

    cy.get('.hs_submit').find('input')
      .trigger('onmouseover');
  })







})