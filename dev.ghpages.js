/* eslint-disable no-console, import/no-extraneous-dependencies */

const git = require('git-last-commit');
const ghpages = require('gh-pages');

const myShortHash = '8b5068b';

git.getLastCommit((err, commit) => {
  console.log(`${commit.shortHash} vs ${myShortHash}`);

  if (commit.shortHash === myShortHash) {
    ghpages.publish('dist', {
      branch: 'master', // self named github repos must be hosted from master
      message: `dev @ ${myShortHash}`,
      dotfiles: true, // include .gitignore to avoid github node_modules issues
    });
    console.log('Published');
  } else {
    console.log('NOT DEPLOYED!');
    console.log('You forgot to update deploy commit hash');
  }
});
