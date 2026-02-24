Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById select one element using by its ID.
getElementsByClassName select elements by class name. It returns multiple elements and it gives a HTMLCollection.
querySelector selects the first element with matching class.
querySelectorAll selects all elements that match with the class and gives a NodeList.

2. How do you create and insert a new element into the DOM?

Answer: To create a new element, I can use document.createElement().
Then I can add necessery things in it.
After that, I insert it by using  appendChild(), append().

3. What is Event Bubbling? And how does it work?

Answer: Event bubbling is when an event starts from the target element and then moves up to its parent elements like a tree.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is that when we add an event listener to a parent element instead of adding it to multiple child elements. We control it by using event.target

6. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the default behavior of an element.
stopPropagation() stops the event from bubbling.
