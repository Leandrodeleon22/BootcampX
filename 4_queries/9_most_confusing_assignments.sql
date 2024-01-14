SELECT assignments.id, assignments.day, assignments.chapter, assignments.name, 
COUNT(assistance_requests.*) 
as total_request 
FROM assignments
JOIN assistance_requests ON assignment_id = assignments.id
GROUP BY assignments.id
ORDER BY total_request DESC


