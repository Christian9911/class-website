export default function Contact({ schoolName, onNavigate }) {
  return (
    <section>
      <h2>Contact Us</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Location:</strong> Kigali, Rwanda (edit to your school's location)</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <p>Replace the sample email and location with your school's official details.</p>
      <button type="button" onClick={() => onNavigate("Home")}>Return to Home</button>
    </section>
  );
}