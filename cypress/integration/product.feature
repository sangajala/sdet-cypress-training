Feature: Checkout products

        Scenario Outline: Checkout tests

            Given I am in home page
             When I select and item "<Product>"
              And I select max size of the products
              And I close the Product
             
        Examples:
                  | Product                            | Title | Name   | Email                     | Address | Message                     |
                  | Midi sundress with shirring detail | Mr    | Sriram | sriram.angajala@gmail.com | Address | Your order has been placed. |
                #   | Midi sundress with shirring detail | Mr    | Ramana | sample@gmail.com          | Address | Your order has been placed. |

        Scenario Outline: Checkout from product

            Given I am in home page
             When I select and item "<Product>"
              And I select max size of the products
              And I add item to cart
             
        Examples:
                  | Product                            | Title | Name   | Email                     | Address | Message                     |
                  | Midi sundress with shirring detail | Mr    | Sriram | sriram.angajala@gmail.com | Address | Your order has been placed. |
                #   | Midi sundress with shirring detail | Mr    | Ramana | sample@gmail.com          | Address | Your order has been placed. |


