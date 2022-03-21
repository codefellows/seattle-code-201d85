# Final Project Guidelines

Welcome to Project Week! Here is a list of best practices for proper Git and GitHub workflow with your project team.

*Note: Attendance is taken every scheduled meeting session at the usual time, including during project weeks.*

Before writing any code, take time to plan with your team. Make sure you are all in agreement about the goals of your application. Once you settle on an idea, prepare to pitch your idea to your instructor.

## Your pitch should include the following:

1. [Group Agreement](https://codefellows.github.io/common_curriculum/projects/Project_Prep_1)
1. [Idea Approval](https://codefellows.github.io/common_curriculum/projects/Project_Prep_2)
1. [Tooling Creation](https://codefellows.github.io/common_curriculum/projects/Project_Prep_3)
1. [Pitch Creation](https://codefellows.github.io/common_curriculum/projects/Project_Prep_4)

## Project Organization

Here is some more information about GH Organizations....

Create an organization by clicking on the plus sign in the top right corner of GitHub. Then, create your repository(ies) within the organization. All team members should be added as collaborators on the organization.

Within the repository, click on the "Project" tab and then click the button to "Create a project". This will allow you to create a project board associated with the repository. Make several columns with meaningful names, such as "To-Do", "In progress", "Under review", and "Completed".

Populate your project with issues. Each issue should be a small item, typically linked to a feature task. As you work on an issue, assign it to yourself and move it into the "In progress" column. This will provide an easy way for everyone on the team to see the progress of each issue and know who is working on a particular issue.

_Why:_
> Issues are userful for managing small features that an individual or pair can reasonably tackle in a short period of time. The project board creates a clear visual of the team's current tasks and the current project status.

When using GitHub issues, there is the added benefit of being able to close an issue through a commit message or a comment on a pull request (PR). For example, a commit message or comment can say "Closes #42" and the issue will automatically be closed when the pull request is merged. Github recognizes the following keywords to close an issue: `close`, `closes`, `closed`, `fixes`, and `fixed`.

You are welcome to use other project management tools besides GitHub Projects, but your code base must be on GitHub.

## Project Requirements

1. Linter
   - Your repository should include an `.eslintrc.json` file, which you can find in the main lecture repository for your class.

1. .gitignore
   - Your repository should include a `.gitignore` file, which you can find in the main lecture repository for your class.

1. Licensing
   - Your repository should be initialized with an MIT license. Ensure that the resources you use are open-source and also available under an MIT or similar license.

### Technical Boundaries

Your project should utilize and be focused upon the technologies you learned in Code 201.

Specifically, here are things that you ***will not*** be allowed to use:

- Libraries/frameworks such as React, Vue, Angular, etc.
- CSS frameworks such as Bootstrap or Skeleton
- SASS, LESS, or any other CSS extension language

You **may** learn and use other JavaScript libraries if you get permission from your instructor.

If your team has any questions about what can or cannot be used, consult with the instructional staff.

### Documentation

Your project should be documented on GitHub and within your code base.

On GitHub, create a `README.md` file as the main landing document of your repository. Continue to update it as your project evolves.

At a minimum, your `README.md` should include the following:

- The name of the project
- Names of the team members
- A description of the project
- The overall problem domain and how the project solves those problems
- Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
- A list of any libraries, frameworks, or packages that your application requires in order to properly function. If needed, provide instructions that the user may need to follow in order to get your application up and running on their own computer.

Within your code, document with meaningful comments. For example, a comment might provide an overview of what the function beneath it is doing, or describe the relationship between two variables.

Comments should be updated as necessary. Remove all unused, commented-out code before committing to GitHub.

### File Structure

Before you scaffold your files within your repo, determine how you will organize your project. Your files should be organized into folders in a meaningful manner. For example, all of your CSS files should be within a `css` folder.

Here is an example file structure:

```bash
.
├── about-us.html
├── index.html
├── quiz.html
├── css
|   ├── about-us.css
|   ├── home.css
|   └── quiz.css
└── js
    ├── home.js
    └── quiz.js
```

### Code Style

Follow the code style you have learned throughout this course. Ensure that the team is using meaningful and descriptive names for all files, variables, function names, etc. Follow best practices with casing, spacing, and indentation.

Your team should decide on standard naming conventions to use throughout the project and hold each other accountable to these standards. Do not use funny or offensive names. Write code that you will be proud to show a future employer.

The code base should also follow similar code organization from file to file. For example, all the files that affect application styling should follow similar patterns and syntax.

## Daily Team Workflow

As a team, decide how you will work on your project throughout each day.

At the start of your day, it is helpful to have a meeting between the team members to make sure that everyone knows what is going on with the project and to discuss the plan for the day. It is wise to have additional check-ins at lunch time and at the end of the day. With every check-in, assess the current percentage of MVP and make a prediction for when your team will reach full MVP.

In your morning check-ins, discuss the features each member plans to work on. Determine if the team member will work individually, as a pair, or if the entire team will work on a single feature together, referred to as "mob programming".

Also, use this time to discuss any interpersonal issues that may arise. It is better to address them head-on and resolve any tension rather than allowing it to fester.

## Stand-up

Every day, the instructional team with circulate to your group for a formal stand-up. Stand-up should take approximately 10 minutes per team. Some instructors will opt for a second stand-up later in the day.

_Why:_
> Stand-ups give both your project team and instructional team insight into the current status of your project and the progress the team hopes to make each day.

During stand-up, each team member will stand up and take turns discussing three points:

> 1. What you personally accomplished yesterday
> 1. What you plan to accomplish today
> 1. Anything that is blocking you from making progress

## Daily Goals

Day 1: Pitch the idea to your instructor. Once the idea is approved, create your repository, fill your project board with issues,begin scaffolding your files, and build out your requirements. Deploy your site, then begin to build features.

Day 2: This should be a big build-out day of features.

Day 3: Continue to build out features. Strive for full MVP by the end of the day.

Day 4: Work on any additional styling and refactoring. Work on some stretch goals. Practice your presentation.

Day 5: Presentation Day!

## Git

The entire team should follow the same process for synchronizing the code base on GitHub and on their local computers.

The main branch is the source of your deployment, which should only contain fully functional code. A development branch should be created as a main source for external branches to be merged into, and only the development branch should be merged into main.

All work should be on a feature branches with a meaningful name. Feature branches should be created off of the development branch. When the feature is completed, create a pull request from your feature branch to the development branch.

When you start a new feature and any time a pull request is merged into the development branch, make sure that your local development branch is up to date. Check out the development branch, then pull the development branch. Create your new branch off of the updated development branch.

Always make sure you are working off of the most up-to-date code base. This will prevent writing redundant code or overwriting code that you or another team member wrote.

If a pull request from a teammate has been merged and you working on a branch but are not ready to push your changes, you can still pull those changes while continuing to work on your feature branch. To do so, add and commit any changes on your local feature branch. Check out your main or development branch and pull the changes. Then, check out your feature branch and run the command `git merge main` if the main branch was pulled and `git merge development` if the development branch was pulled.

## Pull Requests

When your features are completed and tested on your local branch, you are ready to add, commit, and push those changes to GitHub. Then, create a pull request from your feature branch to the development branch. Do not merge your own pull request. Have one of your team members review and approve the request.

If the pull request is not ready to be merged, leave detailed comments and request changes from the creator of the pull request.

When the pull request is merged to development, every team member should check out their own local development branch and pull the changes. Then, test the code in the browser to ensure that the desired features have been implemented correctly.

Periodically, as determined by your team, make a pull request from the development branch to the main branch and follow the same process to test the changes to the main branch on everyone's local computers. Merging pull requests to the main branch should also update the deployed site, so confirm functionality there as well.

After a pull request is merged, leave the branch on GitHub even though GitHub says you can delete it. This helps with your overall record-keeping on the project.

## Deployment

Deploy your project on GitHub Pages and be prepared to present from the deployed version of your site.

To deploy to GitHub pages, go to the "Settings" tab in the repository. Scroll down to the "GitHub Pages" section. In the "Source" dropdown, select your main branch and click "Save". You will then see a deployed URL and can click it to see your deployed site.

Note that it may take a few minutes for the deployed link to update and display your updated code as it appears on the main branch. If you do not see the deployed site updating after approximately 30 minutes, check the code base to ensure that there are no errors in your functionality when running your code locally.

Deploy your site on the first day of project week.

After the initial repository creation, scaffold out a basic `index.html` file with a heading element or something similar. Then push this code to GitHub and deploy it as a "proof of life" that the deployment worked correctly. As you continue to work on your project, the deployed site will update any time the team merges a pull request into the main branch. You also have the option to set this to a different branch, although it is most common to deploy from the main branch.

You are welcome to purchase a domain name, although this is not a requirement.

## Presentation Prep

Your team should practice their presentation prior to the final presentation day. This is typically scheduled by the instructional team. During the practice presentation, the instructional team will provide constructive feedback about the flow of the presentation and appearance of the application.

Create a slide deck/power point for your presentation. Have the beginning slides be an introduction to your team, followed by a slide to kick off your demo, then an ending slide to prompt for question.

Decide whose computer to use during the presentation and bring that computer to the practice session. Make sure you have any cables or adapters needed. Test this same computer in the main event space. Test a backup computer as well, just in case.

The presentation should be approximately 15 minutes long, including some time at the end for questions. Present from the deployed site. **Each member should introduce themselves with their personal pitch. You've praticed it, now use it!** The "About Us" page provides a great backdrop for this portion of the presentation.

Each member of the team should have a speaking part. It is okay to use note-cards if you are nervous about forgetting what to talk about. Some of the areas to discuss include:

- An introduction of the project and the problem domain, including the team's solution
- A demonstration of the application's functionality
- The team's approach to planning and communication throughout the week
- A technical obstacle or two and how those obstacles were overcome
- A portion of the final application that each team member is particularly proud of

In general, while it's okay to show a small amount (~3 lines) of code to show off an interesting feature in your presentation, do not show large amounts of code or entire files during the presentation unless the audience asks to see it. Have a code editor open just in case though.

In addition to the scheduled practice session, the team is encouraged to continue to practice on their own. Keep track of the time and adjust accordingly. Practice with the microphone (or holding something) to feel comfortable with holding it and practice passing the microphone between team members as you switch speaking roles.

The appropriate dress code is business casual - not too formal and not too casual.

Here are some other tips for a successful presentation:

- Tell us early in your presentation what your app can do and clearly state what inspired you to build that app.
- Practice your application demo/walkthrough. As you're entering example inputs, have a plan for what you're typing; it really derails a presentation when someone on the microphone says "so here you enter your name" and the person typing on the computer is trying to think of a name to enter.
- Make sure to keep your tone positive about what your app can do, especially in the early part of your presentation. Make this what you would say about your project in an interview setting. Avoid the temptation to tell self-deprecating jokes; you need to practice talking about this app in a professional, pitch-y way.
- The right time to talk about things you didn't get to finish is as "stretch goals" that you talk about towards the end of your presentation. This is also the right time for descriptions of technical obstacles you faced during the week, which is the time it's okay to make self-deprecating jokes.
- One other useful way to think about this presentation is that it's a chance for you to share what you learned this week with your classmates. If you used a new technology or a new library, how did it go? Should your classmates also use that library, or should they stay away? What do you wish you had known before starting a project like this?
- Speak clearly and do not use slang or profanity. Take it seriously and be professional.

## Grading

Each team member's grade is based on their individual effort and the project's technical merit.

Individual effort is graded based on links to commits and Pull Requests that demonstrate your contributions, as submitted in Canvas in the daily project week reports.

Technical merit is graded based on the following criteria:

- Good and proper use of HTML
  - Clear, readable, and efficient structure
  - Uses semantic markup whenever possible

- Good and proper use of CSS
  - Clear, readable, and efficient styles
  - Appropriate page layout for desktop
  - Well-organized file structure
  - At least one CSS animation

- Good and proper use of JavaScript
  - Clear, readable, and efficient code
  - Uses domain models to encapsulate data and behavior, such as objects and constructors
  - Responds to user events to receive/process user input and display new content to the user
  - Contains no unnecessary or commented-out code

- Generally useful and functional
  - Works as expected with no bugs
  - Has at least three distinct pages with clear navigation, one of which must be an "About Us" page
  - Has at least two pages that accept and process user input
  - State is persisted between page reloads
  - Deployed live on the Internet via GitHub Pages

This document was inspired by and adapted from [this set of project guidelines](https://github.com/elsewhencode/project-guidelines).
