import { useState } from "react";
import projects from "../data/projects";
import certificates from "../data/certificates";
import techStack from "../data/techStack";

const Portfolio = () => {
  const [tab, setTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-400">
        Portfolio Showcase
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {["projects", "certificates", "tech stack"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-lg ${
              tab === t ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tab === "projects" &&
          projects.map((p) => (
            <div
              key={p.id}
              className="bg-black p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img src={p.image} alt={p.title} className="rounded-md mb-3" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          ))}

        {tab === "certificates" &&
          certificates.map((c) => (
            <img
              key={c.id}
              src={c.image}
              alt="Certificate"
              className="rounded-md shadow-lg"
            />
          ))}

        {tab === "tech stack" &&
          techStack.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center bg-black p-4 rounded-xl shadow-lg"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <p>{tech.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
