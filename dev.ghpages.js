/* eslint-disable no-console, import/no-extraneous-dependencies */

const git = require('git-last-commit');
const ghpages = require('gh-pages');
const fs = require('fs');

const myShortHash = '5479d2a';

git.getLastCommit((err, commit) => {
  console.log(' LATEST -- CURRENT');
  console.log(`${commit.shortHash} vs ${myShortHash}`);

  if (commit.shortHash === myShortHash) {
    // Push .gitignore to prevent git parsing /node_modules on branch change
    fs.copyFile('./.gitignore', './build/.gitignore', (fsErr) => {
      if (fsErr) {
        throw fsErr;
      } else {
        ghpages.publish('build', {
          branch: 'master', // self named github repos must be hosted from master
          message: `dev at ${myShortHash}`,
          dotfiles: true, // .gitignore
        });
        console.log('\\o/ Published \\o/');
      }
    });
  } else {
    console.log('NOT PUBLISHED!');
    console.log('You forgot to update deploy commit hash.');
  }
});
