/**
 *  index.js
 *  Converts all the models into database tables using Sequalize.
 */

const { sequelize, Sequelize } = require('../config/config');

// authentication
const UserModel = require('./authentication/User');
const PermissionModel = require('./authentication/Permissions');
const PersonaModel = require('./authentication/Persona');
// learning-resources
const CourseModel = require('./learning-resources/Courses');
const LessonsModel = require('./learning-resources/Lessons');
const TagModel = require('./learning-resources/Tag');
const LessonTagModel = require('./learning-resources/LessonTags');
const PathModel = require('./learning-resources/Path');
// user-resource
const CandidateModel = require('./user-resources/Candidate');
const RecruiterModel = require('./user-resources/Recruiter');
const QuestionModel = require('./user-resources/Question');
const CandidateLessonsModel = require('./user-resources/CandidateLessons');

// authentication
const User = UserModel(sequelize, Sequelize);
const Permission = PermissionModel(sequelize, Sequelize);
const Persona = PersonaModel(sequelize, Sequelize);
// learning-resources
const Course = CourseModel(sequelize, Sequelize);
const Lesson = LessonsModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const LessonTag = LessonTagModel(sequelize, Sequelize);
const Path = PathModel(sequelize, Sequelize);
// user-resources
const Candidate = CandidateModel(sequelize, Sequelize);
const Recruiter = RecruiterModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const CandidateLessons = CandidateLessonsModel(sequelize, Sequelize);
/*
 // Commented out for staging. This section is currently broken
 
// associations dump
User.hasMany(Lesson, { foreignKey: 'creator' });
User.belongsTo(Persona);
Persona.hasMany(User);
Persona.belongsTo(Permission);
Permission.hasMany(Persona);
Course.hasMany(Lesson);
Lesson.belongsToMany(Candidate, { through: CandidateLessons });
Lesson.belongsToMany(Tag, { through: LessonTag });
Lesson.belongsTo(User);
Lesson.belongsTo(Course);
Lesson.belongsTo(Path);
Tag.belongsToMany(Lesson, { through: LessonTag });
Path.hasMany(Lesson);
Candidate.belongsTo(User);
Candidate.belongsTo(Recruiter, { foreignKey: 'contactedBy' });
Candidate.belongsTo(Question);
Candidate.belongsToMany(CandidateLessons, { through: CandidateLessons });
Question.hasMany(Candidate);
Recruiter.hasMany(Candidate, { foreignKey: 'contactedBy' });
Recruiter.belongsTo(User);
*/
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
  Sequelize,
};
