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
