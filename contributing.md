# Contributing to the ICT4D Guide

We are using a combination of Github and Gitbooks for the ICT4D Guide. Why? Mostly it has to do with the ease of updates, version control, and collaboration among lots of different people, as well as the unqualified ability for Github-based projects to be flexible and extensible down the road.

One of the unfortunate challenges for new users, particularly in the ICT4D world, is that Github is still a little too technical and daunting. But don't fear -- this is a great time to learn!

If you're not ready to make pull requests and edit markdown files yet, we've got you covered. Just head over to the [issues](https://github.com/gabrielkrieshok/ict4d-guide/issues) page for the project and make your voice heard -- either fixing something that needs correcting, or adding a resource that we've left off.



## The workflow

You should use [the GitHub Workflow](https://guides.github.com/introduction/flow/) (either on your computer, or [in the browser](https://github.com/blog/1557-github-flow-in-the-browser)) to make any changes to the repository. In other words:

* Never commit directly to the master branch unless you're fixing a very obvious typo or mistake that does not warrant any discussion.
* Open [a new pull request](https://github.com/gabrielkrieshok/ict4d-guide/compare) to propose changes to any file in this repository.

New to GitHub? The [GitHub Guides](http://guides.github.com) are a great place to start, and go over everything you need to know.

## Commit to master or submit a pull request?

See something in the folders or `readme` you want to improve? Awesome. The general rule is that if it's something so uncontroversial nobody could possibly object, such as spelling, grammar, or clarifying language, go ahead and just make the edit directly on the `master` branch (just hit "edit"). Same goes for if you're reviewing another member's pull request.

If your change is a bit more substantive, such as adding a document, or you want someone else to give your proposed change a thumbs up first, or at least get notified, follow the instructions below to create a new branch and submit a pull request. It's easy, really. No command line necessary.

## Starting a new discussion

To start a new discussion, simply [create a new issue](https://github.com/gabrielkrieshok/ict4d-guide/issues/new) and ask away. Think of it like a traditional list serve. Everyone else in the community will receive an email notification that you've posted a question, and will have the opportunity to reply.

## Submitting a pull request

If your discussion's a bit more substantive, such as a step-by-step guide, or a document you want others to contribute to or be able to more easily access going forward, or if you want to modify a file already in the repostiory, consider [submitting a pull request](https://help.github.com/articles/creating-a-pull-request) to add a document to the `docs/` folder. It's super easy:

### High-level overview of the flow

1. Create a new, descriptively named branch. For example, if you want to add a file that describes licensing best practices, a great branch name would be `ict4d-health-practices`.
2. Make your changes on that new branch
3. Create a pull request, asking the community to merge that new branch into the project

*Note: Because filenames are used to generate linkable URLs, all filenames should be lowercase, separating words by hyphens where appropriate.*

### The Web-flow approach

1. Navigate to http://github.com/gabrielkrieshok/ict4d-guide in your favorite browser
2. Click the branch drop down to create a new, descriptively named branch. ![branch drop down](https://f.cloud.github.com/assets/282759/1035804/61aaff16-0f30-11e3-916b-452a8665425e.png)
3. If you want to edit an existing file, simply click the file name, then click edit in the top-right corner of the resulting page. If you want to create a new file, click the new file button and name your file `docs/[awesome-file-name].md`. ![new file button](https://f.cloud.github.com/assets/282759/1035818/9f60f770-0f30-11e3-9205-0157abee2d75.png)
4. Make your changes in the online editor. If you're new to markdown, click any white space on the page (to move your cursor out of the editor), then press the `m` key for a handy cheat sheet.
5. Add a short description of your change, and hit the big green save button.
6. Back at http://github.com/gabrielkrieshok/ict4d-guide, click the shiny new compare button to create a new pull request. ![compare button](https://f.cloud.github.com/assets/282759/1035855/764a0bf0-0f31-11e3-8c05-ddbe0b56e227.png)
7. Enter a title and description, and hit submit
8. That's it! Participate in the discussion, and once a consensus has been reached, your proposed change will be merged.

### The command-line approach

Got Git already set up on your computer? Great.

1. `git clone http://github.com/gabrielkrieshok/ict4d-guide`
2. `cd ict4d-health-practices`
3. `git checkout -b [a-descriptive-branch-name]`
4. (make your changes)
5. `git add .`
6. `git commit -m '[a short description of your change]'`
7. Head over to http://github.com/gabrielkrieshok/ict4d-guide and follow the on-screen instructions to submit your pull request.