const Sequelize = require('sequelize');
const UserModel = require('./user');
const CourseModel = require('./course');
const lessonModel = require('./lesson');
const CandidateModel = require('./candidate');
const RecruiterModel = require('./recruiter');
const QuestionModel = require('./question');
const CandidateLessonModel = require('./candidateLesson');
const PersonaModel = require('./persona');
const PermissionModel = require('./permission');
const TagModel = require('./tag');
const LessonTagModel = require('./lessonTag');
const PathModel = require('./path');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres',
});

const User = UserModel(sequelize, Sequelize);
const Course = CourseModel(sequelize, Sequelize);
const Lesson = lessonModel(sequelize, Sequelize);
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
