const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");

const Project = require("../models/Project.model")

router.post("/projects", async (req, res) => {
   try {
      const { title, description } = req.body
      const newProject = await Project.create({title, description, tasks: []})
      res.json(newProject)
   } catch (error) {
      res.json(error)
   }
})

router.get("/projects", async (req, res)=> {
   try {
      const projectsDb = await Project.find().populate("tasks")
      res.json(projectsDb)
   } catch (error) {
      res.json(error)
   }
})

router.get("/projects/:projectId", async (req, res) => {
   const { projectId } = req.params
   try {
      const projectDB = await Project.findById(projectId).populate("tasks")
      res.json(projectDB)
   } catch (error) {
      res.json(error)
   }
})

router.put("/projects/:projectId", async (req, res) => {
   const { projectId } = req.params
   const projectUpdate = req.body
   try {
      const projectDB = await Project.findByIdAndUpdate(projectId, projectUpdate)
      res.json(projectDB)
   } catch (error) {
      res.json(error)
   }
})

router.delete("/projects/:projectId", async (req, res) => {
   const { projectId } = req.params
   try {
      const projectDeleted = await Project.findByIdAndRemove(projectId)
      res.json({ message: `project with id ${projectDeleted._id} was deleted`})
   } catch (error) {
      res.json(error)
   }
})

module.exports = router
