import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const input = "border border-gray-300 pl-2";
  const group = "flex flex-col";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => alert("Failed to send message: " + error.text);
  };

  return (
    <div className="w-[25%] flex flex-col justify-center gap-4">
      <header className="font-semibold text-5xl -ml-6">Contact</header>
      <form onSubmit={sendEmail} className="flex flex-col gap-2">
        <div className={group}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={group}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={input}
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={group}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`${input} w-full h-[75px]`}
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="cursor-pointer w-fit bg-blue-500 text-white flex items-center gap-2 justify-center py-2 px-4 rounded-lg"
          type="submit"
        >
          <FaEnvelope /> Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
