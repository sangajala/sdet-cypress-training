Feature: Checkout products

        Scenario Outline: Checkout tests

            Given I am in home page
             When I select and item "<Product>" and add it to cart
              And I proceed to checkout
              And I fill the checkout details with "<Title>" , "<Name>" ,"<Email>" and "<Address>"
             Then I should see "<Message>" message

        Examples:
                  | Product                            | Title | Name   | Email                     | Address | Message                     |
                  | Midi sundress with shirring detail | Mr    | Sriram | sriram.angajala@gmail.com | Address | Your order has been placed. |
                  | Midi sundress with shirring detail | Mr    | Ramana | sample@gmail.com          | Address | Your order has been placed. |




