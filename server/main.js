import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import  { Tasks } from '/imports/api/tasks';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});

function insertTask(time, asm, task, porter, status, notes, username, update) {
  Tasks.insert({ time, asm, task, porter, status, notes,  username, update,  createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Tasks collection is empty, add some data.
  if (Tasks.find().count() === 0) {
    insertTask('500', 'Bryan', 'wash car', 'Not Started', 'customer needs ride', 'bpartipilo', 'button' );
  }
});