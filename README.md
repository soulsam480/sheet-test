# VUEjs blog Starter

> Blog Starter based on VUEjs, Google Sheets API v4, Firebase and Bootstrap.

Using this starter you can build your own fully functional blog/portfolio and also deploy on github pages. The process is a bit long but it's very smooth and you may encounter close to zero errors.

## Project setup

1. Clone or Fork this repository.
2. Go to google [Google Developers Console](https://console.developers.google.com) and create a new project. Go to credentials and create a new API key and a new OAuth Client ID. Don't forget to whitelist localhost:8080 and the deploy URL so that the app goes functional.
2. Then go to [Firebase](https://console.firebase.google.com) and create a new peoject. Go to project settings, scroll to end and copy the firebase config for webapp.
3. Now open your project on VSCode or any other text editor of your choice. Open main.js file. Then enter the configs for you firebase project.

```
firebase.initializeApp({
  apiKey: "Your API Key",
  authDomain: "Your Auth Domain",
  databaseURL: "Your Database URL",
  projectId: "Your Project ID",
  storageBucket: "Your Storage Bucket",
  messagingSenderId: "Messaging sender ID",
  appId: "Your APP ID"
});
```
4. Then put your API confg in the const apiConfig for using Google sheets API and OAuth.

```
const apiConfig = {
  apiKey: "Your API Key",
  // From google developers console
  clientId: "Your Client ID",
  // From google developers console OAuth
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/sheets",
  refreshToken: true
};

```
Now the setup is complete for reading and writing data to Sheets API and Firebase Project.

5. As we are using google sheets for ou Database lets go to [google Sheets](https://docs.google.com/sheets) and create a new document.  Open the Spreadsheet and name the current sheet "main".

6. Copy the Sheet ID from the address bar. It will be something like this 
https://docs.google.com/spreadsheets/d/**1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhi05UsIrk** . Select and copy the bold text.

7. Go to src/store/index.js and in the actions method and add your API key and Spreadsheet ID.
```
axios
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/" +
            "Your Spreadsheet ID" +
            "/values/main!A2:E?key=" +
            "Your API Key"
        )
        .then(response => {
          var res = response.data.values;
          context.commit("addData", res);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
```
Then go to src/components/Admin.vue and Add your spreadsheet ID in lines 197,215,294,318 and 343.

8. Now the setup is complete and run the following commands in the project folder for the dev preview. 

```
npm install
npm run serve

```

## For deployment
1. Go the the vue.config.js file in the project folder and change the config accordingly.
2. Then run the following commands in the terminal

```
npm run build

cd dist

git init
git config user.email youremail@example.com 
git config user.name "your name"

gi add .

git commit -m "deploy"

git push https://github.com/<USERNAME>/<REPO>.git master:gh-pages

```
this should push your code to github on a new branch gh:pages. If this code is not working please contact me on [mail](mailto:souslam480@hotmail.com).

## Accessing the Admin
1. The Admin page can be opened by adding admin after the main URL on the address bar like this

```
localhost:8080/#/admin

```
2. The default ID and Password for the admin are **admin**. 
3. To change the admin password , change the mainId and mainPass properties to your desired ID and Password.
```
export default {
  name: "Admin",
  props: [],
  components: {
    editor: Editor
  },
  data: function() {
    return {
      a: 0,
      b: "",
      c: "",
      authId: "",
      authPass: "",
      mainId: "sambit",
      mainPass: "QaWsEd",
      imageData: null,
      picture: null,
      uploadValue: 0,
      editorText: "Add post content here",
      editorOptions: {
        hideModeSwitch: true
      },
      postBody: "",
      editData: [],
      onPostEdit: false
    };
  }

  ```
### Adding a new post
1. To write data to the Google sheet you have to log in using OAuth2. SO when you will commit the first post it will ask for authorization. Log in with google email which has your google sheet else it will show error.
2. To add images select te file using the HTML input button and upload.
3. If you want to add images commit a post after you have uploaded the image. 

### Editing Posts

1. To edit a post, select the edit button from the Update post section in admin. Then change the data and click save on the same selected post.
2. The post delete feature will be added in future.

## All Features

1. Simple Admin Panel with WYSIWYG Editor.
2. Fast and reliable with google API and Firebase.
3. Very small in size.
4. Lazy-load images.
5. Single Page Application for faster Performance.
6. Deployment on github pages.


