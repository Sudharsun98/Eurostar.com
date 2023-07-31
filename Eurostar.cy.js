describe('Eurostar.com', () => {
    it('Testing the railway ticket booking system', () => {
        cy.viewport(1280, 753.60);

        cy.visit('https://www.eurostar.com/rw-en'); // Line-no: 3 has been used for visiting/redirecting to the corresponding website URL (www.eurostar.com) //
        cy.wait(2000)

        cy.get('#consent_prompt_accept_all_cookies').contains('ACCEPT ALL').click({force:true}); // Line-no: 5 has been used for clicking the button called (ACCEPT ALL) //
        cy.wait(2000);

        cy.get('#tab-2').click({force:true}); // Line-no: 11 has been used for selecting the tab called (Hotel) //
        cy.wait(2000);

        cy.get('#tab-0').click({force:true}); // Line-no: 14 has been used for selecting the tab called (Trains) //
        cy.wait(2000);

        cy.get('#journey-type-2').click({force:true}); // Line-no: 17 has been used for clicking the radio button called (One way) //
        cy.wait(2000);

        cy.get('#journey-type-1').click({force:true}); // Line-no: 20 has been used for clicking the radio button called (Return) //
        cy.wait(2000);

        cy.get('.sc-95iwlo-5').contains('Search').click({force:true}); // Line-no: 23 has been used for clicking the button called (Search) //
        cy.wait(2000);

        cy.get('.sc-1jy3c60-2').contains('From').click({multiple:true}); // Line-no: 26 has been used for clicking the text field called (From) //
        cy.wait(2000);

        cy.get('#__next').contains("London St Pancras Int'l").click({force:true}); // Line-no: 29 has been used for selecting one of the option called (London St Pancras Int'l) //
        cy.wait(2000);

        cy.get('.sc-1jy3c60-5').contains('To').click({multiple:true}); // Line-no: 32 has been used for clicking the text field called (To) //
        cy.wait(2000);

        cy.get('#__next').contains("Paris Gare du Nord").click({force:true}); // Line-no: 35 has been used for selecting one of the option called (Paris Gare du Nord) //
        cy.wait(2000);

        cy.get('.sc-1jy3c60-3').contains('When').click({multiple:true}); // Line-no: 38 has been used for clicking the text field called (When) //
        cy.wait(2000);

        cy.get('.sc-1ekpebb-0').eq(1).click({force:true}); // Line-no: 41 has been used for clicking the arrow icon (>) //
        cy.wait(2000);

        cy.get('.sc-158hvzt-0').contains('10').click({force:true}); // Line-no: 44 has been used for selecting the From date //
        cy.wait(2000);

        cy.get('.sc-158hvzt-0').contains('12').click({force:true}); // Line-no: 47 has been used for selecting the To date //
        cy.wait(2000);

        cy.get('.sc-1jy3c60-5').contains('Passengers').click({force:true}); // Line-no: 50 has been used for clicking the text field called (Passengers) //
        cy.wait(2000);
        
        cy.get('.sc-16wkrq3-5').eq(1).click({force:true}); // Line-no: 53 has been used for clicking the plus icon (+) //
        cy.wait(2000);

        cy.get('.sc-7w9xhz-0').contains('OK').click({force:true}); // Line-no: 56 has been used for clicking the button called (OK) //
        cy.wait(2000);

        cy.get('.sc-95iwlo-5').contains('Search').click({force:true}); // Line-no: 59 has been used for clicking the button called (Search) //
        cy.wait(2000);

        cy.get('.sc-oh483x-4').eq(0).contains('Morning').click({force:true}); // Line-no: 62 has been used for clicking the link/button called (Morning) //
        cy.wait(2000);

        cy.get('.sc-173ffic-2').eq(0).contains(148).click({force:true}); // Line-no: 65 has been used for clicking the price icon, which is represented as ($171) //
        cy.wait(2000);

        cy.get('.sc-axlilu-4').eq(0).contains('Select').click({force:true}); // Line-no: 68 has been used for clicking the button called (Select) //
        cy.wait(2000);

        cy.get('.sc-oh483x-4').eq(0).contains('Morning').click({force:true}); // Line-no: 71 has been used for clicking the link/button called (Morning) //
        cy.wait(2000);

        cy.get('.sc-173ffic-2').eq(1).contains(62).click({force:true}); // Line-no: 74 has been used for clicking the price icon, which is represented as ($148) //
        cy.wait(2000);

        cy.get('.sc-axlilu-4').eq(1).contains('Select').click({force:true}); // Line-no: 77 has been used for clicking the button called (Select) //
        cy.wait(2000);

        cy.get('.sc-bZPPFW').contains('Continue').click({force:true}); // Line-no: 80 has been used for clicking the button called (Continue) //
        cy.wait(2000);

        cy.get('#__next').contains('Continue without extras').click({force:true}); // Line-no: 83 has been used for clicking the button called (Continue Without extras) //
        cy.wait(2000);

        cy.get('.sc-axlilu-4').contains('Check out as a guest').click({force:true}); // Line-no: 86 has been used for clicking the button called (Check out as a guest) //
        cy.wait(2000);

        cy.screenshot(); // Line-no: 89 has been used for capturing the screenshot of the page //
    });
});
