# Handling Merge Conflicts

## Issue

* Some one on your project has merged a **_Pull Request_** into the `main` branch.
* You push your code to your remote branch named `branch_name` and open a **_Pull Request_** to the `main` branch.
* _GitHub_ informs you your code can not automaticly merge into the `main` branch.

### Step by Step Solution

1. Navigate to the root of your project in your shell (*the command line*).

* `$ cd /path/to/your/project`

1. Make sure you are on the correct branch.

* `$ git branch`  
  _git will list local branches and put a * in front of the branch you are in_

1. Make sure you have notthing to commit. If you have un-commited changes, commit them.

* `$ git status`  
  _nothing to commit, working directory clean_

1. Update local copy of origin repository

* `$ git fetch origin`  

1. Merge local copy of `origin/main` into your local branch called `branch_name`.

* `$ git merge origin/main`  
  _git will tell you what files have failed to automaticly merge_

1. Open each file with conflicts in your _text editor_.
1. Find the conflicting changes.

* Look for  `<<< HEAD`, `====`, and `>>> main`
* These are called "merge markers"

1. Merge the changes together, so the code has exactly what you want it to have.

* Delete the lines that say `<<< HEAD`, `====`, and `>>> main`
* Delete any unneeded lines from `main` or your `branch_name`.

```javascript

<<<<<<<<<<< HEAD
   this is where the conflicting code from your branch is
 ===========

   this is where the conflicting code from the main branch is
 >>>>>>>>>>> main

```

1. **_RUN YOUR CODE_**.

* **This is possibly the most important step!**
* **Just becuse you "handled" your merge conflict does not mean your haven't broken your app.**
* Make any other needed changes to get everything working correctly

1. Add your changes and commit.

* `$ git add .`
* `$ git commit -m  "handled merge conflict from main"`

1. Push to your `branch_name` on origin.

* `$ git push origin branch_name`

1. **Your _Pull Request_ should be able to merge!**
