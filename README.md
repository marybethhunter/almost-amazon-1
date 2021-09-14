## Welcome to the Almost Amazon application! [![Netlify Status](https://api.netlify.com/api/v1/badges/da9f07dc-b749-435e-9e7d-99ec38165ead/deploy-status)](https://app.netlify.com/sites/almost-amazon-1/deploys)

### [View Site](https://almost-amazon-1.netlify.app)
### Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/almost-amazon-1.git
 $ cd almost-amazon-1
```

### About the User
#### -The ideal user is a reader who needs a way to order, view, and store their favorite books and authors.
#### -The user can create new book and author cards with titles, names, descriptions, etc. They can edit existing cards and delete cards they no longer need. Individual cards can be marked as favorites and those are tied to the specific user's Google account.

### Features: 
#### -CRUD: Cards can be created, read, updated, and deleted. New books and authors can be added via forms.
#### -Filtering: The cards can be filtered by 'Books on Sale' or 'Favorite Authors'.
#### -Search: The book titles can be searched via the searchbar.
#### -Authentication: The user will have to log in to the app with Google. This is done through Google Firebase.

### [Loom video walkthrough]()

### Relevant Links:
#### -[Technical Flowchart](https://docs.google.com/presentation/d/1Y-rQsUZ2UT914b3v1uEqfZrmGzSYIKHqCEROsyHN09k/edit#slide=id.p)
#### -[View Site](https://almost-amazon-1.netlify.app)
#### -[ERD](https://dbdiagram.io/d/612580ac6dc2bb6073b9e5ec)

### Code Snippet:

```javascript
const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObject) => {
      getBooksBySameAuthor(authorObject.firebaseKey)
        .then((bookObject) => {
          resolve({ bookObject, ...authorObject });
        });
    }).catch(reject);
});
```

### Screenshots:

<img width="960" alt="home-page" src="https://user-images.githubusercontent.com/86667443/133307775-1be53743-e06f-4d29-8171-94e9b0fadb9a.png">

<img width="960" alt="book-details" src="https://user-images.githubusercontent.com/86667443/133307811-679dba5b-23cd-4e87-9281-27f2e64884c1.png">

<img width="960" alt="author-view" src="https://user-images.githubusercontent.com/86667443/133307821-0f0cbdfc-d9e0-4bb6-b127-5b24b778bf24.png">

<img width="960" alt="add-author-form" src="https://user-images.githubusercontent.com/86667443/133307844-287e583b-d6b3-4bd4-b82a-1c49520af21a.png">


### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
