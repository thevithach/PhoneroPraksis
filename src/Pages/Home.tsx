import HomeImageCard from "@/components/Layout/Home/HomeImageCard";
import Thevi from "../assets/thevipicture.jpeg";
import Praksis from "@/components/Layout/Home/Praksis";
import Felix from "../assets/felixpicture.jpg";

const Home = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg  min-h-[85vh] p-4">
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-6 p-4">
          <HomeImageCard
            picture={Thevi}
            name={"Vi The Thach"}
            description={
              "Vi The er en student som har jobbet med flere utviklingsprosjekter. Han har erfaring med flere teknologier, frameworks og kodespråk. Han har også jobbet med flere prosjekter som har gitt han en god forståelse av hvordan det er å jobbe som utvikler. Han har da fått praksisplass hos Phonero som utvikler."
            }
            github={"https://github.com/thevithach"}
            linkedin={"https://www.linkedin.com/in/vithethach/"}
            portfolio={"https://thevithach.vercel.app/"}
          />
          <HomeImageCard
            picture={Felix}
            name={"Felix Knutsen"}
            description={
              "Felix er en ivrig student som har jobbet med flere utvikling-prosjekter. Der har han lært om forskjellige teknologier, frameworks og kodespråk. Med den erfaringen har han fått praksisplass hos Phonero. Der vil han få mulighet til å få en større forsåelse av hvordan det er å jobbe som utvikler samt at han vil lære mye om react og typescript."
            }
            github={"https://github.com/FelixKnutsen"}
            linkedin={"https://www.linkedin.com/in/felix-knutsen/"}
          />
        </div>
      </div>
      <Praksis />
    </>
  );
};

export default Home;
