import { useState } from "react";

const ACCESS_KEY = "6cb48fa0-dc7c-41b9-8172-286ab39798b4";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        form.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-[90%] max-w-[1100px] mx-auto py-20">
      <h2 className="text-2xl uppercase tracking-[2px] mb-4">Let's Work Together</h2>
      <p className="mb-8">Have an idea? Let's discuss how I can help.</p>

      <div className="w-full">
        <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[600px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border border-gray-300 px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="border border-gray-300 px-4 py-3"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center justify-center border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
