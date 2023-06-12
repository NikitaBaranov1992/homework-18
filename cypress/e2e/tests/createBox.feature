Feature: user logins and create a box

    Scenario: User logs in and create a box sucessfully
        Given user is on secret santa login page
        When user logs in as "4932843@gmail.com" and "GoodPassword10" and creates a box
        Then a box is created
