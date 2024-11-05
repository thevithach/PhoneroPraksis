import phonero from "../assets/phoneroLogoSmall.png";
import phoneroPhoneView from "../assets/PhoneroMobileView.png";

const Phonero_Refleksjon = () => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center">
        <div>
          <div className="flex items-center space-x-3">
            <span className=" text-gray-600">
              13. September 2024 til 18. Oktober 2024
            </span>
          </div>
        </div>
        <img src={phonero} className="object-fit p-4" />
      </div>
      <div className="p-2">
        <h1 className="font-semibold text-4xl pb-2">Status 2</h1>

        <h2 className="text-2xl font-semibold">Hva har vi gjort?</h2>
        {/* Litt om phonero her */}
        <p>
          La til Api på samtykkeinstillinnger vi tidligere hadde laget. Vi la
          til alle strings i en json-fil slik at det er lettere for bedriften å
          gjøre endringer i framtiden. Det gjør det også mulig å legge til flere
          språk i framtiden. Vi fikset også prisvisning på faktura, der det var
          noe bugs i ux. Senere endret vi på tillegstjenester ved abonnement
          bestilling (dinbedrift). Fikset routing av lenker igjen. Endret på
          bestilling / erstatnings av abonnement slik at radioknappene ikke er
          predefinert. Fikset forsendingbug som oppsto ved ubrukt
          sim-bestilling.
        </p>
        <div className="flex py-4 gap-4 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold pb-1">Utfordringer</h2>
            {/* Arbeidsoppgaver beskrivelse her */}
            <h2 className="text-lg font-bold">Pux-komponenter</h2>
            <p>
              Phonero har laget sitt eget ux-library som de kaller PUX. Vi har
              hatt noe små problemer med pux-componenter ved at vi ikke har hatt
              muligheten for å redigere elementer, og må finne løsninger som
              omgjør komponentene.
            </p>
            <h2 className="text-lg font-bold">
              Gjenskape funksjonalitet i mobilappen
            </h2>
            <p>
              Vi har hatt noen utfordringer med å gjenskape funksjonalitet i
              mobilappen, da vi har hatt begrenset tilgang til mobiltelefoner
              til testing. Dette har gjort at vi har måttet bruke mye tid på å
              finne løsninger og feilsøke. Dette har medført til at det ligger
              en del bugs i mobilvisningen som er vanskelig å fikse, ettersom
              mobilvisning på nettleser ikke gjenskaper samme problemer.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={phoneroPhoneView} className="object-fit" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Avsluttende refleksjon</h2>
          {/* Hva gikk dårlig, hva har gått bra, spennende elns her.. */}
          <p className="pt-2">
            Teknisk har vi lært mye om hvordan Phonero jobber med sine systemer.
            Vi har fått lært mye av rammeverkene Phonero benytter seg av, og har
            fått en god forståelse av hvordan vi kan jobbe med disse i praksis.
            Dette inkluderer alt fra React til GraphQL og .NET.
          </p>
          <p className="py-2">
            Vi har også fått en dypere forståelse av hvordan Phonero benytter
            seg av utviklerverktøy som Jira og Git. Dette har vært en viktig del
            av praksisperioden, og vi har fått en god forståelse for praksis
            rundt dette. Vi har gravd oss dypere inn på konsepter som rebasing
            ved bruk av Git, og hvordan vi kan benytte oss av feature-branches
            som samsvarer med Jira-tickets. Dette er noe vi tar med oss videre i
            vår utviklerkarrieren. Vi ser frem til å fortsette å samarbeide med
            phonero og se hva vi kan få til gjennom praksisperioden.
          </p>
        </div>
      </div>
      <div className="statusPresentasjon">
        <h2 className="text-2xl font-bold">Phonero Praksis Expo</h2>
        <div className="videoStatus">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/3CpYzzf5hEo?si=MbHRt1jVecvyhi5W"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ float: "left" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Phonero_Refleksjon;
