# User-Progress Database Revision

## Table Updates
- Remove CandidateLessons

- Add UserLessons

| **UserLessons** |
| :--- |
|  timestamp |
|  completed *(boolean)* |
| userUuid *(uuid)* |
|  lessonUuid *(uuid)* |

- Add UserCourses

|  **UserCourses** |
| :--- |
|  completed *(boolean)* |
|  userUuid *(uuid)* |
|  courseUuid *(uuid)* |


## Queries
- When user starts a lesson
  1. Create UserLesson if not exist
  2. Create UserCourse if not exist
- When user completes a lesson
  1. Mark UserLesson as complete
  2. Mark if UserCourse is complete
      -  Find all lessons associated with course
      -  Check if user has completed all the lessons
- When user goes to course page
  1. Loop through each course:
      - If UserCourse is complete return 100
      - Else divide number of UserLessons completed by total Lessons of Course
