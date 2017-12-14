/* eslint-disable no-console, import/no-extraneous-dependencies */

const GitRevisionPlugin = require('git-revision-webpack-plugin');
const fs = require('fs');
const ghpages = require('gh-pages');

const shortHash = new GitRevisionPlugin().version();
const myShortHash = '5479d2a';


function deploy() {
  console.log(' LATEST -- CURRENT');
  console.log(`${shortHash} vs ${myShortHash}`);

  if (shortHash === myShortHash) {
    // Push .gitignore to prevent git parsing /node_modules on branch change
    fs.copyFile('./.gitignore', './build/.gitignore', (err) => {
      if (err) {
        throw err;
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
}

deploy();
