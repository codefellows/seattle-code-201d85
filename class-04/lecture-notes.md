# Class 04 Lecture Notes

## Functions

### What are they?

- A function is a group of statements that perform a task (or calculate a value).
- Statements are stored in a structure that prevents them from running until the function is 'called' or 'invoked'

### Why we use them?

- functions are reusable
- functions help to keep our code DRY
- prevent bugs // helps us to find bugs

### 2 Step process

- Define/declare
- Run/invoke

## Pair Programming Instructions

### NAVIGATOR ROLE:

Direct the *driver* with the following steps:

On github.com:

- Tell the driver to fork your Repository.
- In GitHub, navigate the driver to **THEIR COPY** of the forked repo. This will have the driver's name followed by the name of the repo they forked.

``` js
   driverGitHub/repo-name
   forked from navigatorGitHub/repo-name
```

- Direct the driver to copy the link from the green button that says 'code'.

In the **driver's** terminal:

- Direct the driver to cd into Projects or 201 folder and use the command `git clone` followed by the link that you asked the driver to copy from GitHub
  - This will clone down the repo on to the driver's local machine
- Direct the driver to cd into the repo and use `code .` to open VSCode

In the **driver's** VSCode:

- Direct the driver to update your code.

In the **driver's** terminal:

- Instruct the driver to do an A-C-P and push the modified file(s) up to the **DRIVER'S COPY** of the forked repo.

Instruct the driver to return to GitHub.com:

- Navigate the driver to the **DRIVER'S COPY** of the forked repo and have them click on 'Pull Requests' in the options bar across the top of the screen.
- Below the heading that says Compare Changes, you will see a bar with two input fields. One says 'base' and one says 'compare'
- Set base to the repo the driver **FORKED FROM**
- Set compare to **DRIVER'S COPY OF THE REPO**
- Push the button to 'Create the Pull Request' and follow the directions on the next screen to 'Create Pull Request'

### NAVIGATOR'S NEXT STEPS

The Navigator will then do the following on GitHub.com:

- Go to your repository and navigate to the 'Pull Requests' in the options bar across the top of the screen.
- Click on the open 'Pull Request' that the **driver** initiated.
- Review the pull request and then merge the changes.

In the **navigators's** terminal:

- cd into your repo and do a `git pull origin main` to pull down the accepted changes from the 'Pull Request'.

## CSS Positioning

2 types

- static-type
- relative-type
  - relative
  - absolute
  - fixed

### Static - standard - element sits where it normally

### Position Relative

Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute

Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed

fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.
