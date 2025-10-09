# Introduction to Git


**Objectives**

Add & commit files in a local repository.

View file history.

**Tools Needed**

- A [code editor](code-editors.html)
- A Modern Web Browser
- [Git installed on your machine](https://git-scm.com/)

## Overview

Version control is an important tool in our workflow. We can use tools, such as [git](https://git-scm.com/), to keep track of our code, and all changes that are made. We can use git as an individual developer, or as part of a team. Git is used to contribute to others' work as well.

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

The **three stages** of git are:

- Working directory
- Staging area
- Repository

## Install Git

**Do you already have git installed?**

*Git is preinstalled on macOS and some linux operating systems.*

Let's test by opening the command line interface and typing `git --version`.

```
% git --version
git version 2.51.0
```

### Installing Git ➡︎ Windows

Open PowerShell and install the latest version using winget:

```winget install --id Git.Git -e --source winget```

## Step 1 – Create a Repository

Let's create our first repository. You will be working in the command line. You may optionally use VS Code or another git desktop tool.

>A Git repository is a folder that Git tracks for changes.  
>The repository stores all your project's history and versions.

Create a project folder named `git-intro`.

`mkdir git-intro`

Navigate to the `git-intro` folder.

`cd git-intro`

Initialize a git repository.

`git init`

**Create a new file**

Create an `index.html` file.

Enter the code for a basic webpage. Make the title and h1  "Intro to Git".

Enter a paragraph of Lorem ipsum beneath the h1.

Type the command `ls` in the cli. You should see only your `index.html` file listed.

Type the command `git status`. You should see the following

<pre>
% git status
On branch main

No commits yet

Untracked files:
  (use "git add ..." to include in what will be committed)
    index.html

nothing added to commit but untracked files present (use "git add" to track)
</pre>


<div style="padding: 15px; background-color: #9efafd98; margin-bottom: 25px;">
<details>
<summary style="cursor: pointer;">What is an Untracked File?</summary>
<div style="border: thin solid #ffffffff; padding: 5px 15px;">
<p>An <b>untracked</b> file is any file in your project folder that Git is not yet tracking.</p>
<p>These are files you've created or copied into the folder, but haven't told Git to watch.</p>
</div>
</details>
<details>
<summary style="cursor: pointer;">What is a Tracked File?</summary>
<div style="border: thin solid #F1F3F4; padding: 5px 15px;">
<p>A <b>tracked</b> file is a file that Git is watching for changes.</p>
<p>To make a file tracked, you need to add it to the staging area.</p>
</div>
</details>
</div>

## Step 2 – Stage Files

The staging environment (or staging area) is like a waiting room for your changes.

You use it to tell Git exactly which files you want to include in your next commit.

This gives you control over what goes into your project history.

Here are some key commands for staging:

* `git add <file>` - Stage a file
* `git add --all or git add -A` - Stage all changes
* `git status` - See what is staged
* `git restore --staged <file>` - Unstage a file

Add `index.html` to the staging area.

`git add index.html`

Check what is staged with `git status`

<pre>
% git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   index.html
</pre>

## Step 3 – Commit Changes

A **commit** is like a save point in your project.

It records a snapshot of your files at a certain time, with a message describing what changed.

You can always go back to a previous commit if you need to.

Here are some key commands for commits:

- `git commit -m "message"` - Commit staged changes with a message
- `git commit -a -m "message"` - Commit all tracked changes (skip staging)
- `git log` - See commit history

Save your staged changes.

```
% git commit -m "initial commit"
[main (root-commit) 6d07a52] initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 index.html
```

## Step 4 – Modify and Commit files

Add a second paragraph of lorem ipsum to your **index.html** file. Stage and commit the file as above.

```
% git add index.html
% git commit -m "second paragraph"
[main 0af3a09] second paragraph
 1 file changed, 2 insertions(+)
```

## Step 5 – View Commit History

Git keeps a detailed record of every change made to your project.

You can use history commands to see what changed, when, and who made the change.

This is useful for tracking progress, finding bugs, and understanding your project's evolution.

Key Commands for Viewing History

* `git log` - Show full commit history
* `git log --oneline` - Show a summary of commits
* `git show <commit>` - Show details of a specific commit
* `git diff` - See unstaged changes
* `git diff --staged` - See staged changes

View your commit history.

<pre>
% git log
commit 0af3a09cb8801a6fc0dc010b92cf49511f3b76a6 (HEAD -> main)
Author: /Sable <stoic-amigo-dimly@duck.com>
Date:   Tue Aug 19 16:13:07 2025 -0700

    second paragraph

commit 6d07a521a6f2b75617e5115d45e3702922a28ddb
Author: /Sable <stoic-amigo-dimly@duck.com>
Date:   Tue Aug 19 16:09:15 2025 -0700

    initial commit
</pre>

## Step 6 – View Changes Between Commits

You can see what has changed in a file between commits using the **git diff** command.

`git diff <commit_hash> -- <path/to/your/file>`

Try using `git log --oneline` to see shorter hash values.

```
git diff 0af3a09 -- index.html
```

You can restore the version from the prior commit using `git restore`.

```
git restore --source 0af3a09 index.html
```

.Be sure to use hash values from your own repository.

