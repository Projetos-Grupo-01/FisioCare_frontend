import { FilePlusIcon, KeyIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@phosphor-icons/react';
import React from 'react';

interface Tecnologia {
  nome: string;
  img: string;
}

const tecnologiasBackend: Tecnologia[] = [
  { nome: 'Java', img: '/icons8-java 1.png' },
  { nome: 'Spring Boot', img: '/icons8-spring-boot 1.png' },
  { nome: 'MySQL', img: '/icons8-mysql 1.png' },
  { nome: 'Hibernate', img: '/Hibernate 1.png' },
  { nome: 'JWT', img: '/icons8-tomcat 1.png' },
  { nome: 'Swagger', img: '/Swagger 1.png' },
];

const tecnologiasFrontend: Tecnologia[] = [
  { nome: 'Figma', img: '/icons8-figma 1.png' },
  { nome: 'VSCode', img: '/icons8-vs-code 1.png' },
  { nome: 'React', img: '/icons8-react 1.png' },
  { nome: 'Tailwind', img: '/icons8-tailwind-css 1.png' },
  { nome: 'TypeScript', img: '/simple-icons_typescript.png' },
  { nome: 'Vite', img: '/devicon_vitejs.png' },
  { nome: 'Yarn', img: '/yarn 1.png' },
  { nome: 'Axios', img: '/devicon-plain_axios.png' },
];

const funcionalidades = [
  { icone: <FilePlusIcon size={64} color="#5b364e" />,titulo: "Cadastrar", descricao: "Cadastre novos usuários, exercícios e categorias de exercícios." },
  { icone: <KeyIcon size={64} color="#5b364e" />,titulo: "Autenticar", descricao: "Faça login para acessar exercícios e suas categorias com segurança." },
  { icone: <PencilIcon size={64} color="#5b364e" />,titulo: "Atualizar", descricao: "Atualize informações registradas no sistema de forma fácil e ágil." },
  { icone: <MagnifyingGlassIcon size={64} color="#5b364e" />,titulo: "Consultar", descricao: "Consulte exercícios e categorias rapidamente." },
  { icone: <TrashIcon size={64} color="#5b364e" />,titulo: "Excluir", descricao: "Exclua exercícios ou categorias não utilizadas mais." },
];

const Sobre: React.FC = () => {
  return (
    <div className="bg-[#DCD9C2] min-h-screen text-[#001427]">

      {/* Título da Página */}
      <main className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre o Projeto</h2>

        {/* Caixa com Texto */}
        <div className="bg-[#D9D9D9] max-w-5xl mx-auto rounded p-1 mb-14 text-lg">
          <div className="bg-white p-6 rounded-lg text-center text-[#001427] shadow-md">
            <p className="mb-4">
              Na <strong>FisioCare</strong>, acreditamos que por trás de cada recuperação existe um profissional comprometido em transformar vidas. Por isso, criamos uma plataforma pensada exclusivamente para fisioterapeutas que desejam registrar, acompanhar e evoluir os dados dos seus pacientes com agilidade, segurança e eficácia.
            </p>
            <p className="mb-4">
              Sabemos que o cuidado vai além da técnica. Atenção, dedicação, organização e comprometimento constroem histórias reais de superação e alívio. Nosso objetivo é colaborar com cada etapa desse processo.
            </p>
            <p>
              Com a FisioCare, o profissional tem mais tempo para focar no que realmente importa: o bem-estar do paciente. <strong>FisioCare, cada passo com suporte.</strong>
            </p>
          </div>
        </div>

        {/* Faixa Roxa do Título "Funcionalidades" */}
        <div className="bg-[#5B364E] w-full py-3 mb-6">
          <h3 className="text-2xl font-bold text-white text-center">Funcionalidades</h3>
        </div>

        {/* Funcionalidades - Caixas em fundo bege */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-[#001427] px-4 mb-12">
          {funcionalidades.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md px-4 py-6 flex flex-col justify-center items-center h-full">
              {item.icone}
              <h4 className="font-bold mb-2">{item.titulo}</h4>
              <p className="text-sm text-center">{item.descricao}</p>
            </div>
          ))}
        </div>

        {/* Faixa Roxa do Título "Tecnologias Utilizadas" */}
        <div className="bg-[#5B364E] w-full py-3 mb-6">
          <h3 className="text-2xl font-bold text-white text-center">Tecnologias Utilizadas</h3>
        </div>

        {/* Grid de Tecnologias em fundo bege */}
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-32">
          {/* Backend */}
          <div>
            <h4 className="text-lg mb-4 text-center font-bold">Backend</h4>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {tecnologiasBackend.map((tec, i) => (
                <img
                  key={i}
                  src={tec.img}
                  alt={tec.nome}
                  className="w-16 h-16 bg-white p-2 rounded-lg shadow"
                  title={tec.nome}
                />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h4 className="text-lg mb-4 text-center font-bold">Frontend</h4>
            <div className="grid grid-cols-4 gap-6 justify-items-center">
              {tecnologiasFrontend.map((tec, i) => (
                <img
                  key={i}
                  src={tec.img}
                  alt={tec.nome}
                  className="w-16 h-16 bg-white p-2 rounded-lg shadow"
                  title={tec.nome}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;