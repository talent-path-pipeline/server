# User-Progress Database Revision

## Table Updates
- Remove CandidateLessons

- Add UserLessons

| **UserLessons** |
| :--- |
| completed *(boolean)* |
| userUuid *(uuid)* FK |
| lessonUuid *(uuid)* FK |
| courseUuid *(uuid)* FK |
| timestamp *(integer)* |

***Note**: Associating courseUuid directly with UserLesson table for convenience's sake for now.*
***Note**: Timestamp tracking is mostly there if we want to resume video progress for user at a later time. Not important to store if only checking lesson completion.*
***
## Queries
- When user starts a lesson
  1. Create UserLesson if not exist
     - Raw query
    `INSERT INTO UserLesson (userUuid, lessonUuid)
    VALUES ('123', '456')
    ON CONFLICT IGNORE`

     - Alternatively, make a `GET` request by user and lesson IDs. If nothing returned, make `POST` request for new entry.
- When a video is stopped or user leaves the page
  1. Update UserLesson.timestamp
  `UPDATE UserLesson  SET timestamp = 1000 WHERE WHERE userUuid = '123' AND lessonUuid = '456'`
  2. If timestamp >= end or Lesson.length, set Lesson.completed to TRUE
  `UPDATE UserLesson
  SET completed = TRUE
  WHERE userUuid = '123' AND lessonUuid = '456'`
- When user goes to Catalog page
  1. Get UserLesson entries for User
  `SELECT * FROM UserLesson WHERE userUuid = '123'`
  2. Calculate progress using lesson and course data already pulled from database.
