// Before we dive into TypeScript, let's clarify what the DOM is. The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document's structure, style, and content. Essentially, it's a tree-like structure of nodes that represent the elements, attributes, and text content of a web page. 

// Get a reference to an HTML element
const heading = document.getElementById('myHeading') as HTMLHeadingElement;

// Change the text content of the heading
heading.textContent = 'Hello, TypeScript!';

// Create a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph.';

// Append the paragraph to the body
document.body.appendChild(paragraph);

// Advanced Techniques

// Asynchronous Operations
// Handle asynchronous operations (e.g., fetching data from APIs) to update the DOM dynamically.
// Styling
// Manipulate CSS styles using JavaScript and TypeScript to create dynamic and responsive layouts.
// Event Handling
// Use TypeScript to define event listener functions with precise typing for event objects.

// Null or Undefined Reference Errors
// Solution
// Nullish Coalescing Operator (??)
// Use this operator to provide default values for potentially null or undefined elements.
// Optional Chaining (?)
// Access properties of an object only if the object exists.
// Robust DOM Querying
// Ensure that elements are correctly selected using getElementById, querySelector, or querySelectorAll.
// Issue
// Accessing DOM elements that may not exist can result in null or undefined reference errors.
// Timing Issues and Asynchronous Operations
// Solution
// DOMContentLoaded Event
// Wait for the DOMContentLoaded event to ensure the DOM is fully loaded before manipulating it.
// Asynchronous Operations
// Use async/await or Promises to handle asynchronous operations and update the DOM once the results are available.
// setTimeout and setInterval
// Use these functions carefully to schedule DOM updates, but be mindful of potential performance implications and race conditions.
// Issue
// Manipulating the DOM before it's fully loaded or attempting to modify elements within asynchronous operations can lead to unexpected behavior.
// Event Handling Errors
// Solution
// Clear Event Listeners
// Remove event listeners when they are no longer needed to avoid memory leaks and unintended side effects.
// Error Handling
// Implement error handling within event handlers to gracefully handle exceptions.
// Event Bubbling and Capturing
// Understand the event propagation model to correctly target specific elements and prevent unintended consequences.
// Issue
// Incorrectly attaching or removing event listeners, or handling events without proper error handling can cause unexpected behavior.
// Solution
// Follow Framework Guidelines
// Adhere to the specific guidelines and best practices of the framework you're using.
// Understand Virtual DOM
// If using a framework with a virtual DOM, be aware of how it differs from direct DOM manipulation.
// Issue
// Frameworks like React and Angular have their own approaches to DOM manipulation, and using them incorrectly can lead to errors.


//basic dom manipulation
// Get a reference to the element with the ID "myHeading"
//const heading = document.getElementById('myHeading') as HTMLHeadingElement;

// Change the text content of the heading
heading.textContent = 'Hello, TypeScript!';

// Creating and Appending Elements
// Create a new paragraph element
//const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph.';

// Append the paragraph to the body
document.body.appendChild(paragraph);

//event handling
//const button = document.getElementById('myButton') as HTMLButtonElement;

// button.addEventListener('click', () => {
//     alert('Button clicked!');
// });

//dynamic styling
const box = document.getElementById('myBox') as HTMLDivElement;

box.style.backgroundColor = 'red';
box.style.width = '200px';
box.style.height = '100px';

//more complex example
// Get references to the necessary elements
const input = document.getElementById('todoInput') as HTMLInputElement;
const list = document.getElementById('todoList') as HTMLUListElement;

// Function to add a new item to the list
function addTodo() {
    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
        input.value = '';
    }
}

// Add an event listener to the button
const button = document.getElementById('addButton') as HTMLButtonElement;
button.addEventListener('click', addTodo);

// Framework-Specific Approaches
// If using a framework like React or Angular, their specific DOM manipulation techniques might differ.
// Asynchronous Operations
// Use async/await or Promises to handle asynchronous tasks like fetching data from APIs.
// Event Handling
// Attach event listeners using addEventListener and handle events appropriately.
// DOM API
// Use the standard DOM API methods like getElementById, createElement, appendChild, etc.
// Type Safety
// TypeScript helps ensure type correctness, reducing runtime errors.