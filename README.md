file-transfer-issue
===================

This sample project is created to demonstrate meteor connection drop issue when transfering data to server.
To recreate the issue, select a file over 10 Mb and click 'Upload File' button. File content is passed to a server method at click event.After a few seconds "Meteor is disconnected" msg can be
 seen. This issue was not in meteor 0.7.2 but in 0.8.1.3. 
 
Note: Issue is not reflected in local testing. This source is deployed to http://file-transfer-issue.meteor.com/
