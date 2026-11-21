
export default function StudentTable({ students, onDelete }) {
  // Show a helpful message when there are no records.
  if (students.length === 0) {
    return (
      <p>
        No students yet. Add your first student to get started.
      </p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.year}</td>
            <td>
              <a href={`/edit-student/${student.id}`}>Edit</a>

              <button onClick={() => onDelete(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
