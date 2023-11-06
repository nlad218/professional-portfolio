import Form from "react-bootstrap/Form";
import { validateEmail } from "../utils/helpers";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorMessage("Email invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage("this is a required field");
      } else {
        setErrorMessage("");
      }
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0bpzqn",
        "template_ijjjoiq",
        form.current,
        "bxoW8OGTBYF46j3wH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => console.log(error.text)
      );
    setErrorMessage("email sent");

    setName("");

    setEmail("");

    setMessage("");
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleValidation}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleInputChange}
          onBlur={handleValidation}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="your message here"
          onChange={handleInputChange}
          onBlur={handleValidation}
          name="message"
          value={message}
        />
      </Form.Group>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </Form>
  );
}
