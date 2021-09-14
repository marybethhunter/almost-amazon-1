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

### [Loom video walkthrough](https://www.loom.com/share/d9b1b4332fb0478a830ae6b4f0624471)

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

<img width="960" alt="2021-09-14 (5)" src="https://user-images.githubusercontent.com/86667443/133312112-021dd92b-1248-4d23-a415-933b44d2d09a.png">

![2021-09-14 (6)](https://user-images.githubusercontent.com/86667443/133312120-9351edf8-b541-458a-ac22-1473003bfe2c.png)

![2021-09-14 (7)](https://user-images.githubusercontent.com/86667443/133312136-3e4e3ec7-1e35-4941-9eaf-a6bb7cff8340.png)

![2021-09-14 (8)](https://user-images.githubusercontent.com/86667443/133312163-14074617-cdad-48a3-bfae-d083b55b2d5d.png)



### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
