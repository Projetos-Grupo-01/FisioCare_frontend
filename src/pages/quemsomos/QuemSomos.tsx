import Integrante from "../../components/integrantes/Integrante";
// Dados dos integrantes da equipe
const teamMembers = [
  {
    id: 1,
    name: "Aylla Scaglia",
    role: "Desenvolvedora",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.15.37.jpeg?updatedAt=1752154355232",
    linkedinUrl: "https://www.linkedin.com/in/aylla-scaglia/",
    githubUrl: "https://github.com/scaglia-aylla1",
  },
  {
    id: 2,
    name: "Fernanda Murched",
    role: "Desenvolvedora",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.14.04.jpeg?updatedAt=1752154355043",
    linkedinUrl: "https://www.linkedin.com/in/fernandamurched",
    githubUrl: "https://github.com/FernandaMurched",
  },
  {
    id: 3,
    name: "Gabriel Souza",
    role: "Desenvolvedor",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.10.01.jpeg?updatedAt=1752154354923",
    linkedinUrl: "https://www.linkedin.com/in/gabriel-souza77/",
    githubUrl: "https://github.com/GabrielSouza77",
  },
  {
    id: 4,
    name: "Giovana Lucia",
    role: "Desenvolvedora",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2011.01.15.jpeg?updatedAt=1752154354922",
    linkedinUrl: "https://www.linkedin.com/in/giovana-lucia/",
    githubUrl: "https://github.com/Giovanalucia",
  },
  {
    id: 5,
    name: "Luan Queiroz",
    role: "Desenvolvedor",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.11.01.jpeg?updatedAt=1752154354921",
    linkedinUrl: "https://www.linkedin.com/in/luan-queiroz/",
    githubUrl: "https://github.com/Luuh03",
  },
  {
    id: 6,
    name: "Maria Luiza Torres",
    role: "Desenvolvedora",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.08.55.jpeg?updatedAt=1752154355136",
    linkedinUrl: "https://www.linkedin.com/in/maria-lu%C3%ADza-t-01a302340",
    githubUrl: "https://github.com/Marialuiza-dev",
  },
  {
    id: 7,
    name: "Renata Negrini",
    role: "Desenvolvedora",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/WhatsApp%20Image%202025-05-29%20at%2010.11.49.jpeg?updatedAt=1752154355106",
    linkedinUrl: "https://www.linkedin.com/in/rmln/",
    githubUrl: "https://github.com/renatangr",
  },
  {
    id: 8,
    name: "Samuel Silva",
    role: "Desenvolvedor",
    image:
      "https://ik.imagekit.io/gabrielsouza77/integrantes/samuel.jpg?updatedAt=1752154579826",
    linkedinUrl: "https://www.linkedin.com/in/samuel-ssf",
    githubUrl: "https://github.com/Samuel-ssf",
  },
];

function QuemSomos() {
  return (
    <section className="py-3 bg-[#dcd9c2] mb-10 h-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 font-Mooli mt-7">
          Quem somos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <Integrante key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
