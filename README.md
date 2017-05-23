# Personal Blogging Site

### overview
This is a full stack javascript project, utilizing all the tools and technologies I have learned while attending BSCA.

The project will consists of a Home page, which markets my current skill sets as a developer, complete with an about me, and portfolio section.

The project will also have a blogging engine, with a section for users to view blog posts, filter by category, and leave feedback via comments.

User authentication will also be implemented, as a means of who can create Posts and leave comments.

----

### To Run

1) `git clone <url>`

2) ToDo: Finish instructions...

----

### Backend Overview
#### *Technologies*
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongo

#### *API*

__ToDo - Document all of your endpoints, how to utilize them, and the expected response for each endpoint.__

Resources
  - Article
    - title
    - content

  __Ex. Article Resource__
  ```
  {
      title: "My First Blog Post",
      content: "Lorem ipsum etc etc...."
  }
  ```

----

### Front End Overview

#### *Technologies*
  - ReactJS
  - React Router
  - Bootstrap

####  *Pages*
  - Home
    - Blog
      - Articles List
      - View Articles
      - Edit Article
    - Contact


  __ToDo: React Component Hierarchy Tree__

----

#### Phase One
* Create functional Node/Express Application
* Implement CRUD RESTful API for Article Resource
* TDD: Implement at least 3 tests

----

#### Phase Two
* Create functional React App
* Implement Router, to get to each one of your `Container` comps
* Implement client side CRUD for Articles
* Seed Dev DB with fake data using [faker](https://github.com/Marak/faker.js)


### Phase Three

* Create Model Comment with field content
* Add Comment relationship to Article
* Implement API endpoint to create Comment on Article.
  *  make sure you populate the comment, on Article
* Implement Client side ability to view comments for an article.
* Implement Client side ability to post comment on an article.
----

#### Product Roadmap
* User Auth with [auth0](https://auth0.com/)
* Protecting routes/ functionality from non-authed users
* Forming Comments/ Articles relationships
* Design Home page using [Sketch](https://www.sketchapp.com/)
* Update Article to have category & category relationships
* Migrate to production using [Heroku](https://heroku.com)
