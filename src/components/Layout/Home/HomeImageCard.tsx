import React from "react";

interface HomeImageCardProps {
  picture: string;
  name: string;
  description: string;
  github: string;
  linkedin: string;
  portfolio?: string;
}

const HomeImageCard: React.FC<HomeImageCardProps> = ({
  picture,
  name,
  description,
  github,
  linkedin,
  portfolio,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-1/2 p-4 shadow-lg rounded-lg border">
      <img
        src={picture}
        className="rounded-full md:w-1/2 lg:w-full p-4 w-11/12"
      />
      <h2 className="font-semibold text-3xl p-4">{name}</h2>
      <section className="text-gray-600 sm:w-2/3 lg:w-11/12 text-center">
        <p>{description}</p>
        <div className="flex justify-center gap-4 text-5xl p-4 text-black">
          <a href={linkedin} target="_blank" className="hover:opacity-60">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={github} target="_blank" className="hover:opacity-60">
            <i className="fa-brands fa-github"></i>
          </a>
          {portfolio && (
            <>
              <a href={portfolio} target="_blank" className="hover:opacity-60">
                <i className="fa-solid fa-address-card"></i>
              </a>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeImageCard;
