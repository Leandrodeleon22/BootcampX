const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT DISTINCT(teachers.name)  as teacher, 
cohorts.name as cohort
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assistance_requests ON student_id = students.id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name
  
  `
  )
  .then((res) => {
    // console.log(res.rows);
    res.rows.forEach((teacher) => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  });
