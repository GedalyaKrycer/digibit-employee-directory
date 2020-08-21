# unit-19-react-homework-employee-directory

## Objective 
Build an employee directory webpage from scratch using React. 

## Highlights

* Features a custom logo and color scheme that I designed for this project. 

* Colors pass WCAG AAA Level Contrast Ratio standard for color.

* A design mockup was initially created in [Figma prototype](https://www.figma.com/file/RTXniEKvVTicGOcdrVikDd/unit-19-react-homework-employee-directory?node-id=60%3A5) which allowed for rapid experimentation and content creation before jumping into code.

* Employee details are all dynamically mapped from a JSON file. 

    * Employee locations are uniquely linked to Google Maps for NYC, Chicago, Las Vegas and Texas. 

    * Employee phone numbers are able to trigger an actual phone call. (Numbers are factitious) 

    * Email link do all link to unique email addresses, based on the employee's name. (Emails are factitious) 

* React project uses `react-bootstrap`, custom css and `Flexbox` to address styling and make responsive.  

* Used `rel="noopener noreferrer"` on `<a>` elements to protect against `target="_blank"` allowing outside pages access to the `window.opener` object. 

* `useState` and `useEffect` hooks are used to control search and filtering functionality. 

* Search features multiple kinds of validation 

    * All input values are converted to lowercase, so that it matches the JSON name value. 

    * If the input value is a special character or number, a warning message is provided and the input does not go through. Instead all the team members are reloaded. 

    * If the input value does not match any values is a special character or number, a warning message is provided and the input does not go through. Instead all the team members are reloaded. 



## In Progress


* Sort through names in alphabetical order and in reverse 

    * Sort order dynamically changes the text on the button. _Example: **A–Z Sort** vs **Z–A Sort**_

* Have Jobs types filter via dropdown

* Have Locations types filter via dropdown

* Have all filters, search and alphibetical order reset on the "reset" button

* Lazy load images