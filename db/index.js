const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Gaurav:12345678Gd.@cluster0.hzea4dq.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    ID:String

});

const Admin = mongoose.model('Admin', AdminSchema,'Admin');
const User = mongoose.model('User', UserSchema, 'users');
const Course = mongoose.model('Course', CourseSchema, 'Courses');

module.exports = {
    Admin,
    User,
    Course
}