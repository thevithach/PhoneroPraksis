import phonero from "../assets/phoneroLogoSmall.png";
import phoneroPhoneView from "../assets/PhoneroMobileView.png";

const Phonero_Status_1 = () => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center ">
        <div>
          <div className="flex items-center space-x-3">
            <span className=" text-gray-600">
              18. August 2024 til 13. September 2024
            </span>
          </div>
        </div>
        <img src={phonero} className="object-fit  p-4" />
      </div>
      <div className="p-2">
        <h2 className="text-2xl font-semibold">Om Phonero</h2>
        {/* Litt om phonero her */}
        <p>
          Phonero er en norsk mobiloperatør som spesialiserer seg på
          mobilabonnement og telefoniløsninger for bedrifter. De har over 350
          000 brukere fordelt på 30 000 bedriftskunder.
        </p>
        <div className="flex py-4">
          <div className="w-1/2 bg-gray-200">
            <h2 className="text-2xl font-semibold ">Arbeidsoppgaver</h2>
            {/* Arbeidsoppgaver beskrivelse her */}
            <h2 className="text-lg font-bold">
              Tilleggsinformasjon på fakturasiden
            </h2>
            <p>
              Vi har designet og implementert en funksjon som viser at beløpet
              på fakturaen er inkludert mva. Dette bidrar til økt klarhet og
              transparens for kunder.
            </p>
            <h2 className="text-lg font-bold">
              Rerouting av lenker på nettsiden
            </h2>
            <p>
              Vi løste et problem der brukere som åpnet et tilbud fra en e-post
              ble dirigert til hovedsiden og måtte logge inn på nytt. Nå blir
              brukerne videreført til den opprinnelige siden de var på vei til
              etter innlogging, noe som forbedrer brukeropplevelsen betydelig.
            </p>
            <h2 className="text-lg font-bold">
              Popup for kundeaviser og tilbud i mobilappen
            </h2>
            <p>
              Vi har utviklet en popup-funksjon i mobilappen som spør brukerne
              om de ønsker å motta kundeaviser og tilbud på e-post. I tillegg
              holder vi på å lage en egen side hvor kundene kan endre disse
              innstillingene når som helst.
            </p>
          </div>
          <div className="w-1/2 bg-red-500">
            <img src={phoneroPhoneView} className="object-fit" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Refleksjon</h2>
          {/* Hva gikk dårlig, hva har gått bra, spennende elns her.. */}
          <p>
            Selv om vi bare har vært her i noen få uker, har vi allerede lært
            mye og fått utfordringer som har hjulpet oss å vokse profesjonelt.
            Vi trives veldig godt med arbeidsoppgavene, kollegaene og miljøet
            hos Phonero. Vi ser frem til å fortsette å bidra til selskapets
            suksess og utvikle innovative løsninger som møter kundenes, og
            bedriftens behov.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phonero_Status_1;
