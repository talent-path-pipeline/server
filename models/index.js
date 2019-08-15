const { sequelize, Sequelize } = require('../config/config');

const UserModel = require('./accounts/user');
const CourseModel = require('./learningResources/courses');
const lessonsModel = require('./learningResources/lessons');
const CandidateModel = require('./users/candidate');
const RecruiterModel = require('./users/recruiter');
const QuestionModel = require('./users/question');
const CandidateLessonsModel = require('./users/candidateLessons');
const PersonaModel = require('./accounts/persona');
const PermissionModel = require('./accounts/permissions');
const TagModel = require('./learningResources/tag');
const LessonTagModel = require('./learningResources/lessonTags');
const PathModel = require('./learningResources/path');

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
  Sequelize
};
