import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone]       = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_wm5o023",
          "template_2g9lhxb",
          form.current,
          "5ny3W3tI12HEQpTLz"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormData({});
            form.current.reset(); // ✅ clears the input fields
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="user"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Your Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please fill in all the fields before sending."}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send Message
            </Button>
            <span className="done">
              {done && "Thank you! I have received your message and will get back to you soon."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;