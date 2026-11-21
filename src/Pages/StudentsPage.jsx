
import StudentTable from '../components/StudentTable';

export default function StudentsPage({ students, onDelete }) {
  // Pass the student data and delete handler down to the table component.
  return (
    <main>
      <p>RECORDS</p>

      <h1>Students</h1>

      <p>
        There {students.length === 1 ? 'is' : 'are'} {students.length}{' '}
        student{students.length === 1 ? '' : 's'}.
      </p>

      <a href="/add-student">Add student</a>

      <StudentTable
        students={students}
        onDelete={onDelete}
      />
    </main>
  );
}
