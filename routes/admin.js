const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

router.use(express.json());


// Admin Routes
router.post('/signup-admin', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.create({
        username: username,
        password:password
    })

    res.send("Admin added to the data base");
});

router.post('/courses-admin', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price:req.body.price        
    })
    res.send("Course added successfully");
});

router.get('/courses-admin',  adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json(courses);    
});

module.exports = router;