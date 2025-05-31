@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given User is on the enrollment page
        Given User provided required fields
        
    @sep19-1
    Scenario: Verify that next button is clickable
        Then The next button is clickable

    @sep19-2
    Scenario: Verify that next button ist clickable
        When User provided an answer to 'How did you hear about us'
        Then The next button ist clickable