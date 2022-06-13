Feature: Total Amount

Scenario: Total Amount Spent
Given I buy a pair of shoes for $100
When I pay for them I get a receipt with the total amount
Then I should see the total amount spent is $100



