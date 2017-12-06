/* eslint-disable no-console, import/no-extraneous-dependencies */

const git = require('git-last-commit');
const ghpages = require('gh-pages');
const fs = require('fs');

const myShortHash = '8b5068b';

git.getLastCommit((err, commit) => {
  console.log(`${commit.shortHash} vs ${myShortHash}`);

  if (commit.shortHash === myShortHash) {
    // Push .gitignore to prevent git parsing /node_modules on branch change
    fs.copyFile('./.gitignore', './build/.gitignore', (fsErr) => {
      if (fsErr) {
        throw fsErr;
      } else {
        ghpages.publish('build', {
          branch: 'master', // self named github repos must be hosted from master
          message: `dev @ ${myShortHash}`,
          dotfiles: true, // .gitignore
        });
        console.log('Published');
      }
    });
  } else {
    console.log('NOT PUBLISHED!');
    console.log('You forgot to update deploy commit hash.');
  }
});
