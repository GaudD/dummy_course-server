const { Router } = require("express");
const router = Router();
const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");


router.use(express.json());


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    const userexists = await User.findOne({ email: username });
    if (userexists) {
        return res.status(400).send("Username ALready Exists");
    }
    User.create({
        username: username,
        password: password
    });
    res.send("User added to the data base");

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.query.courseId;
    const course = await Course.findOne({ ID: courseId });
    if (course) {
        res.json(course);
    }
    else {
        res.status(404).send("Course not found");
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router