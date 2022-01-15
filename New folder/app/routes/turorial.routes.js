const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = app => {
  const Survey = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Survey
  router.post("/ab/", Survey.upload);

  // router.post("/abc/", upload.single("newImg"), (req,res) => {
  //   console.log(req.file);
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   res.status(201).json({
  //     message: "successful"
  //   })
  // });

  // router.post("/abcd/", upload.single('newimg'), (req,res) => {
  //     console.log(req.file);
  // });

  router.post("/abcd/", upload.single('newimg'), (req,res) => {
    console.log(req.file);
  });

  // Retrieve all Surveys
  router.get("/", Survey.findAll);

  // Retrieve all active Surveys
  router.get("/active", Survey.findAllactive);

  // Retrieve a single Survey with id
  router.get("/:id", Survey.findOne);

  // Update a Survey with id
  router.put("/:SurveyID", Survey.update);

  // Delete a Survey with id
  router.delete("/:id", Survey.delete);

  // Delete all Surveys
  router.delete("/", Survey.deleteAll);

  app.use('/api/surveys', router);
};
