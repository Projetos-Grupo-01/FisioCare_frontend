import { GithubLogoIcon } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center text-white bg-[#001427]">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold mb-1">
            FisioCare | Copyright: {data}
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-base">Fale conosco pelo GitHub!</p>
            <a href="https://github.com/Projetos-Grupo-01" className="text-white hover:text-[#BCCDB2] "target="_blank">
              <GithubLogoIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;