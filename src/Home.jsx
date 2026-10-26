export default function Home({
  schoolName,
  className,
  onNavigate,
  clickCount,
  onCountClick
}) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Class level and trade:</strong> {className}</p>
      <p>
        Welcome! This website introduces our class, the Software Development
        trade, our students, and the subjects and skills we are learning.
      </p>
      <h3>Explore the website</h3>
      <ul>
        <li><button type="button" onClick={() => onNavigate("About")}>Learn about our class</button></li>
        <li><button type="button" onClick={() => onNavigate("Students")}>Meet the students</button></li>
        <li><button type="button" onClick={() => onNavigate("Contact")}>Contact the school</button></li>
      </ul>

      <h3>React click counter</h3>
      <p>You have clicked the button {clickCount} time(s).</p>
      <button type="button" onClick={onCountClick}>Click me</button>
    </section>
  );
}