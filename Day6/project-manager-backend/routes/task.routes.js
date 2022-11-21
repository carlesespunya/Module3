const express = require("express")
const router = express.Router()

const Task = require("../models/Task.model")
const Project = require("../models/Project.model")

router.post("/tasks", async (req, res) => {
   const { title, description, projectId } = req.body
   try {
      const newTask = await Task.create({title, description, project: projectId})
      await Project.findOneAndUpdate( projectId, {$push: {tasks: newTask._id}} )
      res.json(newTask)
   } catch (error) {
      res.json(error)
   }
})

module.exports = router
