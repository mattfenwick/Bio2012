 
Getting started with git
=========

 0. download and install git.  Make sure it's in your path.

 1. setup [username](https://help.github.com/articles/set-up-git) 
 and [email](https://help.github.com/articles/setting-your-email-in-git)

        git config --global user.name "My Name"
        git config --global user.email "email@email.com"
        
 2. [generate ssh keys](https://help.github.com/articles/generating-ssh-keys#platform-all).
 This will allow you to push your local repos to github 

 3. commands:

        # create a local copy of a remote repo (makes a new directory)
        git clone <remote-address>
    
        # put files in the staging area:  the next commit will save them
        git add [filenames ...]
    
        # check the status of the current project:
        #   see files that have been edited, deleted, newly created
        #   also see files that have been added to the staging area and untracked files
        git status
    
        # save the staging area to the local repository
        git commit -m "write a good message explaining the why, not the what"
    
        # copy the contents of the **local** repo
        #   and send them to the master branch of the remote repo
        git push origin master
    
        # copy the contents of the **remote** repo
        #   merge them into the local 'master' branch
        git pull origin master
