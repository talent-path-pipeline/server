const Sequelize = require('sequelize');
const UserModel = require('./user');
const CourseModel = require('./courses');
const lessonsModel = require('./lessons');
const CandidateModel = require('./candidate');
const RecruiterModel = require('./recruiter');
const QuestionModel = require('./question');
const CandidateLessonsModel = require('./candidateLessons');
const PersonaModel = require('./persona');
const PermissionModel = require('./permissions');
const TagModel = require('./tag');
const LessonTagModel = require('./lessonTags');
const PathModel = require('./path');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
});

const User = UserModel(sequelize, Sequelize);
const Course = CourseModel(sequelize, Sequelize);
const Lesson = lessonsModel(sequelize, Sequelize);
const Candidate = CandidateModel(sequelize, Sequelize);
const Recruiter = RecruiterModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const CandidateLessons = CandidateLessonsModel(sequelize, Sequelize);
const Persona = PersonaModel(sequelize, Sequelize);
const Permission = PermissionModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const LessonTag = LessonTagModel(sequelize, Sequelize);
const Path = PathModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & Tables created`);
});

module.exports = {
  User,
  Course,
  Lesson,
  Candidate,
  Recruiter,
  Question,
  CandidateLessons,
  Persona,
  Permission,
  Tag,
  LessonTag,
  Path,
  sequelize,
};
