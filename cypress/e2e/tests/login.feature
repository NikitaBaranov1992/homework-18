Feature: User login on secret santa website

    Scenario: User logs in sucessfully
        Given user is on secret santa login page
        When user logs in
        Then user is on dashboard page