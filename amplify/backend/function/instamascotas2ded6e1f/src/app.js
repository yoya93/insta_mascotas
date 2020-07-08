/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/mascot", function (req, res) {
  // Add your code here

  const mascot = [
    {
      id: 1,
      name: "cats",
      emoji: "🐱",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
      path: "/photos/cats",
    },
    {
      id: 2,
      name: "dogs",
      emoji: "🐶",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
      path: "/photos/dogs",
    },
    {
      id: 3,
      name: "hamsters",
      emoji: "🐹",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg",
      path: "/photos/hamsters",
    },
    {
      id: 4,
      name: "rabbits",
      emoji: "🐰",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg",
      path: "/photos/rabbits",
    },
    {
      id: 5,
      name: "birds",
      emoji: "🐦",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_birds.jpg",
      path: "/photos/birds",
    },
    {
      id: 6,
      name: "fishes",
      emoji: "🐠",
      cover:
        "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg",
      path: "/photos/fishes",
    },
  ];
  res.json({ success: true, mascot });
});

app.get("/mascot/photocard", function (req, res) {
  // Add your code here

  const photocard = [
    {
      id: 0,
      categoryId: 2,
      src:
        "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
      userId: 100,
      likes: 7,
    },
    {
      id: 1,
      categoryId: 1,
      src:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 45,
    },
    {
      id: 15,
      categoryId: 4,
      src:
        "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 1,
    },
    {
      id: 18,
      categoryId: 5,
      src:
        "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 2,
      likes: 15,
    },
    {
      id: 16,
      categoryId: 4,
      src:
        "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 1,
    },
    {
      id: 7,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 40,
    },
    {
      id: 12,
      categoryId: 3,
      src:
        "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 3,
      likes: 6,
    },
    {
      id: 13,
      categoryId: 1,
      src:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 7,
    },
    {
      id: 11,
      categoryId: 3,
      src:
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 40,
    },
    {
      id: 5,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 2,
      categoryId: 1,
      src:
        "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 3,
    },
    {
      id: 9,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 8,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 3,
      categoryId: 1,
      src:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 7,
    },
    {
      id: 19,
      categoryId: 6,
      src:
        "https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 4,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 27,
    },
    {
      id: 10,
      categoryId: 3,
      src:
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 17,
      categoryId: 5,
      src:
        "https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 21,
    },
    {
      id: 6,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 20,
      categoryId: 6,
      src:
        "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 0,
    },
    {
      id: 14,
      categoryId: 2,
      src:
        "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      userId: 1,
      likes: 27,
    },
  ];
  res.json({ success: true, photocard });
});

app.get("/mascot/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/mascot", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/mascot/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/mascot", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/mascot/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/mascot", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/mascot/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
