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
