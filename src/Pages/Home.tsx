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
              "Vi The Thach er en engasjert tredjeårs student med erfaring fra flere utviklingsprosjekter. Han behersker ulike teknologier, rammeverk og programmeringsspråk. Gjennom praksisperioden vil han tilegne seg verdifull erfaring innen utvikling. Praksisplassen gir han en verdifull mulighet til å videreutvikle sine ferdigheter og øke sin kompetanse."
            }
            github={"https://github.com/thevithach"}
            linkedin={"https://www.linkedin.com/in/vithethach/"}
            portfolio={"https://thevithach.vercel.app/"}
          />
          <HomeImageCard
            picture={Felix}
            name={"Felix Knutsen"}
            description={
              "Felix er en engasjert student med erfaring fra flere utviklingsprosjekter, hvor han har lært om ulike teknologier, rammeverk og programmeringsspråk. Denne erfaringen har gitt ham en praksisplass hos Phonero, hvor han vil få en dypere forståelse av utviklerrollen. I tillegg vil han få muligheten til å fordype seg i moderne teknologier og utviklingsmetoder."
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
