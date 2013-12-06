
deployment
=========


 + $ ssh dvsn4.d1.peapod.com
    ++ ldap pw

 + $ su - dynadm
    gr33n;c@r



 + $ cd deployments/{environment of choice}


publishing:
==========

 + merges changes into new branches
 ./scripts/merge-content.sh {branch}

 + then
 ./scripts/create-listing.sh

 + publishes to load balancers and magic at midnight:
 ./scripts/deploy2prod.sh



 + ./scripts/switch prod {branch}
    flags:
 +  -p flag pushes (small) page changes ( you need to already have the branch on your box though)



checkout
========

+ $ cd ~/Documents/virtual/workspace

+ $ svn co svn+ssh://aluhring@svn.peapod.com/usr/local/svnroot3/kodiak/branches/{branchname}

