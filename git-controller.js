// Simple-git without promise 
const simpleGit = require('simple-git')();
// Shelljs package for running shell tasks optional
//const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')();

// change current directory to repo directory in local
//shellJs.cd('./');
// Repo name
const repo = 'poc-lambda';  //Repo name
// User name and password of your GitHub
const userName = 'rajeev159';
const password = 'rajeev1599';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
//simpleGit.addConfig('user.email','rajeev10.1985@gmail.com');
//simpleGit.addConfig('user.name','Rajeev Kumar Ranjan');
// Add remore repo url as origin to repo
//simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log('Added files'+addSuccess);
          simpleGitPromise.commit('Intial commit by simplegit')
            .then(
               (successCommit) => {
               console.log('commited '+successCommit);
               simpleGitPromise.push('origin','master')
                  .then((success) => {
                     console.log('repo successfully pushed');
                  },(failed)=> {
                     console.log('repo push failed');
               });
            }, (failed) => {
               console.log('failed commmit'+failed);
         });
       }, (failedAdd) => {
          console.log('adding files failed'+failedAdd);
    });
// Commit files as Initial Commit
 
// Finally push to online repository
 