 import { USERS } from './users';

 export const POSTS = [
     {
         imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
         user:USERS[0].user,
         likes:7870,
         caption: "Train Ride to Hogwarts lest go to new journey of coding good to go bro",
         profile_picture: USERS[0].image,
         comments:[
             {
                 user:"sachin",
                 comment: "wow ! This is fab bro." 
             },
             {
                user:"mahesh",
                comment: "great going bro keep it on." 
            },
         ],
     },
     {
        imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        user:USERS[1].user,
        likes:7870,
        caption: "Train Ride to Hogwarts",
        profile_picture: USERS[1].image,
        comments:[
        ],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        user:USERS[2].user,
        likes:7870,
        caption: "Train Ride to Hogwarts",
        profile_picture: USERS[2].image,
        comments:[
            {
                user:"sachin",
                comment: "wow ! This is fab bro." 
            },
            {
               user:"mahesh",
               comment: "great going bro keep it on." 
           },
        ],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        user:USERS[1].user,
        likes:7858 ,
        caption: "Train Ride to Hogwarts",
        profile_picture: USERS[1].image,
        comments:[
            {
                user:"sachin",
                comment: "wow ! This is fab bro." 
            },
            {
               user:"mahesh",
               comment: "great going bro keep it on." 
           },
        ],
    },
 ]

 export const postFooterIcons = [
     {
         name:'Like',
         imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
         likedImageUrl:"https://img.icons8.com/color/344/like--v3.png"
     },
     {
        name:'Comment',
        imageUrl:'https://img.icons8.com/material-outlined/344/ffffff/speech-bubble--v1.png',   
     },
     {
        name:'Share',
        imageUrl:'https://img.icons8.com/material-outlined/344/ffffff/near-me.png',   
     },
     {
        name:'Save',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/344/ffffff/bookmark-ribbon--v1.png',   
     },
     

 ]