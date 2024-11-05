import phonero from "../assets/phoneroLogoSmall.png";

const Phonero_Refleksjon = () => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center">
        <div>
          <div className="flex items-center space-x-3">
            <span className=" text-gray-600">8. november 2024</span>
          </div>
        </div>
        <img src={phonero} className="object-fit p-4" />
      </div>
      <div className="p-2">
        <h1 className="font-semibold text-4xl pb-2">Avsluttende Refleksjon</h1>

        <h2 className="text-2xl font-semibold">Hva har vi lært?</h2>
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
      </div>
    </div>
  );
};

export default Phonero_Refleksjon;
