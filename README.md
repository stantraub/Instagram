# README

(picture here of splash page)

## Background and Overview

Disneygram is an Instagram clone with a Disney-inspired twist. Users in the Disney universe are able to create accounts, login/logout, and view pictures. Post capability will be added in the near future. 

Features cloned from Instagram include:

User authentication
Feed
User Profile with picture grid layout
Likes
Comments

## Demo

https://disneygram.herokuapp.com

## Technologies 

Disneygram was built with a variety of technologies. I used Ruby on Rails for my backend and React/Redux for my frontend. User information was stored in a database set up by PostgreSQL and images are stored via AWS S3. 

## Website Features

### Signup/Sign In Page 

The Signup/Sign In is an almost exact clone of the instagram web app user authentication page. The font and background color are the same to match Instagram's website style. The iPhone template features a Disney castle gif superimposed on the phone. 

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2019-09-20+at+11.53.12+AM.png)

### Posts 

Disneygram users can view other users' posts in a couple of ways. The first way is that users are presented a feed of all the users' posts in the app when they are logged in.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-feed.png)

The other way is that they have the ability to view the posts on another user's profile in a grid layout.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-profile-page.png)

Users able to click on individual posts on a user's profile and a modal pops up showing a bigger view of the picture as well as associated likes and comments.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/user-post-modal.png)

Users are also able to access a show modal of each post on the feed by either clicking on the image or clicking the comment button 

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/index-modal.png)

### Likes & Comments

### Follows 
Users are able to follow/unfollow one another's profiles. A follow/unfollow button will render if user is on another user's profile. If the user is on their own profile, they will see edit bio/upload buttons in its place.

![alt text](https://disneygram-seeds.s3-us-west-1.amazonaws.com/follows.png)





