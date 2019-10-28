/**
 *  index.js
 *  Converts all the models into database tables using Sequalize.
 */

const { sequelize, Sequelize } = require('../config/config');

// authentication
const UserModel = require('./authentication/User');
const PermissionModel = require('./authentication/Permission');
const PersonaModel = require('./authentication/Persona');
// learning-resources
const CourseModel = require('./learning-resources/Course');
const LessonsModel = require('./learning-resources/Lesson');
const TagModel = require('./learning-resources/Tag');
const LessonTagModel = require('./learning-resources/LessonTag');
const PathModel = require('./learning-resources/Path');
// user-resource
const CandidateModel = require('./user-resources/Candidate');
const RecruiterModel = require('./user-resources/Recruiter');
const QuestionModel = require('./user-resources/Question');
const CandidateLessonsModel = require('./user-resources/CandidateLesson');

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
const CandidateLesson = CandidateLessonsModel(sequelize, Sequelize);


// associations dump
// User.belongsTo(Persona, { foreignKey: 'personaType', targetKey: 'type' });
// Persona.hasMany(User, { foreignKey: 'personaType', sourceKey: 'type' });
Persona.belongsTo(Permission);
Permission.hasMany(Persona);
Candidate.belongsTo(Question);
Question.hasMany(Candidate);
Candidate.belongsTo(Recruiter, { foreignKey: 'contactedBy' });
Recruiter.hasMany(Candidate, { foreignKey: 'contactedBy' });
Lesson.belongsTo(Path);
Path.hasMany(Lesson);
Lesson.belongsToMany(Tag, { through: LessonTag });
Tag.belongsToMany(Lesson, { through: LessonTag });
Candidate.belongsTo(User);
Recruiter.belongsTo(User);
User.hasMany(Lesson, {foreignKey: 'creator', sourceKey: 'uuid'});
Lesson.belongsTo(User, {foreignKey: 'creator', targetKey: 'uuid'});
Course.hasMany(Lesson);
Lesson.belongsTo(Course);
Lesson.belongsToMany(Candidate, { through: CandidateLesson }); 
Candidate.belongsToMany(Lesson, { through: CandidateLesson });

// sequelize.sync({force: true}).then(() => {
//   console.log(`Database & Tables created`);
// });
sequelize.sync().then(() => {
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
  Sequelize,
};
