const { Pool } = require("pg");
const data = process.argv.slice(2);

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '${data[0]}%'
LIMIT ${data[1]};
`
  )
  .then((res) => {
    // console.log(res.rows);
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
