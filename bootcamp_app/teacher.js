const { Pool } = require("pg");
const data = process.argv.slice(2);

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const queryString = `
SELECT DISTINCT(teachers.name)  as teacher, 
cohorts.name as cohort
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assistance_requests ON student_id = students.id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = $1
ORDER BY teachers.name
`;

const values = [`${data[0]}`];
pool.query(queryString, values).then((res) => {
  // console.log(res.rows);
  res.rows.forEach((teacher) => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  });
});
