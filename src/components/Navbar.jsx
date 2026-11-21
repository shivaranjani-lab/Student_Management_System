
export default function HomePage({ studentCount }) {
  // studentCount arrives from App as a prop and keeps the summary up to date.

  return (
    <main>
      <p>STUDENT MANAGEMENT</p>

      <h1>Keep your student record in one place.</h1>

      <p>
        Add, view, update, and remove student details with this simple app.
      </p>

      <a href="/students">View students</a>

      <a href="/add-student">Add a student</a>

      <section>
        <p>Students registered</p>
        <h2>{studentCount}</h2>
      </section>
    </main>
  );
}


