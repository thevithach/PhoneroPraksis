import phonero from "../assets/phoneroLogoSmall.png";
import EPSI from "../assets/EPSI.png";
import BYTT from "../assets/BYTT.jpg";

const Phonero_Oppgavebeskrivelse = () => {
  return (
    <div className="container mx-auto max-w-screen-lg  h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center ">
        <div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600">18. August 2024</span>
          </div>
        </div>
        <img src={phonero} className="object-fit  p-4" />
      </div>

      <div className="p-2 text-gray-600">
        <h1 className="font-semibold text-3xl text-black">Kort om Phonero</h1>
        <p className="py-2">
          Phonero er et selskap etablert i 2008, og tilbyr mobiloperatører for
          bedrifter. De tilbyr mobilabonnement og moderne løsninger til store og
          små bedrifter samt offentlig sektor. Phonero
        </p>
        <p className="py-2">
          Phonero har som mål å gjøre kundenes hverdag enklere gjennom innovativ
          digitalisering og brukervennlig teknologi. Som en mobiloperatør som
          prioriterer effektivitet og smidighet, setter Phonero en ny standard
          for hva kundene kan forvente i bransjen.
        </p>

        <p>
          Phonero, som er en del av Telia, har blitt utnevnt til kundefavoritt
          av bytt.no i både 2018, 2019, 2021 og 2022. I tillegg har Phonero de
          mest fornøyde bedriftskundene i mobilmarkedet, ifølge en undersøkelse
          basert på EPSI-resultater fra 2022.
        </p>
        <h2 className="py-2 font-semibold text-3xl text-black">
          Forventninger
        </h2>
        <p>
          I løpet av praksisprogrammet, skal vi samarbeide tett med
          utviklerteamet. Vi tror at dette blir en lærerik opplevelse som vil
          gi oss dypere forståelse for programmering. Personlig har vi jobbet
          tidligere mye med Phoneros teknologistack, men vi har fortsatt mye
          kunnskapsmangel innenfor disse som vi håper blir dekket i løpet av
          praksisperioden.{" "}
        </p>
        <h2 className="font-semibold text-3xl py-2 text-black">
          Oppgavebeskrivelse per i dag
        </h2>
        <p>
          Oppgavebeskrivelsen for oss praksis utviklere blitt forklart relativt
          kort, da mye av arbeidet vi skal gjøre avgjøres av kompetansen vår. Vi
          skal dermed først sette oss inn i systemet deres og prøve å lære oss
          strukturen og metodikken deres. Dette skal vi først prøve oss på ved å
          replikere noen av deres sider på{" "}
          <span className="font-bold">Ditt Phonero</span>.
        </p>
        <hr className="my-4" />
        <div className="flex gap-4">
          <img src={EPSI} className="w-1/6" />
          <img src={BYTT} className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Phonero_Oppgavebeskrivelse;
