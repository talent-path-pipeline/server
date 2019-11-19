# User-Progress Database Revision

## Table Updates
- Remove CandidateLessons

- Add UserLessons

| **UserLessons** |
| :--- |
|  timestamp |
|  completed *(boolean)* |
| userUuid *(uuid)* FK |
|  lessonUuid *(uuid)* FK |
| courseUuid *(uuid)* FK |

***
## Queries
- When user starts a lesson
  1. Create UserLesson if not exist
   `INSERT INTO UserLesson (userUuid, lessonUuid)
   VALUES ('123', '123')
   ON CONFLICT IGNORE`
- When user stops a video
  1. Update UserLesson.timestamp
  `UPDATE UserLesson  SET timestamp = 123 WHERE WHERE userUuid = '123' AND lessonUuid = '123'`
  2. If timestamp >= end or Lesson.length, set Lesson.completed to TRUE
  `UPDATE UserLesson
  SET completed = TRUE
  WHERE userUuid = '123' AND lessonUuid = '123'`
- When user goes to Catalog page
  1. Get UserLesson entries for User
  `SELECT * FROM UserLesson WHERE userUuid = '123'`
  2. Calculate progress using lesson and course data already pulled from database.
