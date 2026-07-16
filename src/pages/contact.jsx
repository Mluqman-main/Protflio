import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: formData.subject,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error(result);
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-cyan-500/3 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-100 h-100 bg-violet-500/3 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-cyan-500 to-transparent"></div>
            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.4em] uppercase">
              Contact
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Let's work <br />
            <span className="text-slate-500">together.</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white resize-none focus:outline-none focus:border-cyan-500/50"
                ></textarea>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 space-y-10">

            {/* Info */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-4">
                Get in touch
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                I'm currently open for freelance work and full-time positions.
                Feel free to contact me for projects or collaborations.
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-3">
                Email
              </h3>

              <a
                href="mailto:mluqmakhan@gmail.com"
                className="text-lg text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                mluqmakhan@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-3">
                Based in
              </h3>

              <p className="text-slate-400 text-sm">
                Islamabad, Pakistan
              </p>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/5 bg-white/2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>

              <span className="text-sm text-slate-400">
                Available for work
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}