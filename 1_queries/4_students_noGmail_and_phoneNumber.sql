SELECT name, email, cohort_id from students
WHERE email NOT LIKE ('%@gmail.com') AND phone IS NULL