@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given User is on the enrollment page

    Scenario: Verify that Steps 'Start Application' 'Payment Plan' and 'Review' displayed
        Then Start Application is displayed and it's highlighted in blue
        Then Payment Plan is displayed and it's highlighted in grey
        Then Review is displayed and it's highlighted in grey