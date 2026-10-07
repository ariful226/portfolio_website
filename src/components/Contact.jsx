import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  }

  return (
    <section
      id="contact"
      className="contact section"
    >

      <div className="section-title">

        <p>Let's Connect</p>

        <h2>
          Contact Me
        </h2>

      </div>


      <div className="contact-container">


        <div className="contact-card">

          <h3>
            Get In Touch
          </h3>

          <p>
            If you would like to contact me,
            feel free to reach out.
          </p>

          <div className="contact-info">

            <p>
              📧 arifulhaq.mu@gmail.com
            </p>

            <p>
              📍 Bangladesh
            </p>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>


          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>


          {submitted && (

            <p className="success-message">
              ✅ Your message has been submitted successfully!
            </p>

          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;