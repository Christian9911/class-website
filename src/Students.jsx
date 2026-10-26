const students = [
  { id: "SD001", name: "Student One", trade: "Software Development" },
  { id: "SD002", name: "Student Two", trade: "Software Development" },
  { id: "SD003", name: "Student Three", trade: "Software Development" },
  { id: "SD004", name: "Student Four", trade: "Software Development" },
  { id: "SD005", name: "Student Five", trade: "Software Development" }
];

export default function Students({ className }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>Class: {className}</p>
      <p>Replace the sample names below with the real names of your classmates.</p>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total students displayed: {students.length}</p>
    </section>
  );
}