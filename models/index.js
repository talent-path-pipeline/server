const { sequelize, Sequelize } = require('../config/config');

const UserModel = require('./authentication/user');
const CourseModel = require('./learning-resources/courses');
const lessonsModel = require('./learning-resources/lessons');
const CandidateModel = require('./userResources/candidate');
const RecruiterModel = require('./userResources/recruiter');
const QuestionModel = require('./userResources/question');
const CandidateLessonsModel = require('./userResources/candidateLessons');
const PersonaModel = require('./authentication/persona');
const PermissionModel = require('./authentication/permissions');
const TagModel = require('./learning-resources/tag');
const LessonTagModel = require('./learning-resources/lessonTags');
const PathModel = require('./learning-resources/path');

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
