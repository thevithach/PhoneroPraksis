import phonero from "../assets/phoneroLogoSmall.png";
import phoneroPhoneView from "../assets/PhoneroMobileView.png";

const Phonero_Status_1 = () => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center">
        <div>
          <div className="flex items-center space-x-3">
            <span className=" text-gray-600">
              18. August 2024 til 13. September 2024
            </span>
          </div>
        </div>
        <img src={phonero} className="object-fit p-4" />
      </div>
      <div className="p-2">
        <h1 className="font-semibold text-4xl pb-2">Status 1</h1>

        <h2 className="text-2xl font-semibold">Om Phonero</h2>
        {/* Litt om phonero her */}
        <p>
          Phonero er en norsk mobiloperatør som spesialiserer seg på
          mobilabonnement og telefoniløsninger for bedrifter. De har over 350
          000 brukere fordelt på 30 000 bedriftskunder.
        </p>
        <div className="flex py-4 gap-4 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold pb-1">Arbeidsoppgaver</h2>
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
              innstillingene når som helst. Dette lar oss praktisere både
              back-end og front-end.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
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
      <div className="statusPresentasjon">
        <h2 className="text-2xl font-bold">Status 1 - Presentasjon</h2>
        <div className="videoStatus">
          <iframe
            src="https://uiano-my.sharepoint.com/personal/felixfk_uia_no/_layouts/15/embed.aspx?UniqueId=870581e8-7acd-4ff4-9543-2feeb7b36373&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="640"
            height="360"
            title="Phonero Praksis Status 1 "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Phonero_Status_1;
