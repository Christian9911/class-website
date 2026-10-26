export default function About({ schoolName }) {
  return (
    <section>
      <h2>About Our Class</h2>
      <p>
        The purpose of this website is to present our class, share information
        about our learning, introduce students, and make school contact details
        easy to find.
      </p>
      <p>
        We study Software Development at {schoolName}. Software Development
        involves planning, creating, testing, and maintaining computer
        applications and websites.
      </p>
      <h3>Subjects and skills we learn</h3>
      <ul>
        <li>Front-End Development with ReactJS</li>
        <li>HTML and JavaScript programming</li>
        <li>PHP programming and web development</li>
        <li>Database fundamentals</li>
        <li>Version control with Git and GitHub</li>
      </ul>
    </section>
  );
}