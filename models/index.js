const Sequelize = require('sequelize');
const UserModel = require('./User');
const CourseModel = require('./Course');
const LessonModel = require('./Lesson');
const CandidateModel = require('./Candidate');
const RecruiterModel = require('./Recruiter');
const QuestionModel = require('./Question');
const CandidateLessonModel = require('./CandidateLesson');
const PersonaModel = require('./Persona');
const PermissionModel = require('./Permission');
const TagModel = require('./Tag');
const LessonTagModel = require('./LessonTag');
const PathModel = require('./Path');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres',
});

const User = UserModel(sequelize, Sequelize);
const Course = CourseModel(sequelize, Sequelize);
const Lesson = LessonModel(sequelize, Sequelize);
const Candidate = CandidateModel(sequelize, Sequelize);
const Recruiter = RecruiterModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const CandidateLesson = CandidateLessonModel(sequelize, Sequelize);
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
  CandidateLesson,
  Persona,
  Permission,
  Tag,
  LessonTag,
  Path,
  sequelize,
};
