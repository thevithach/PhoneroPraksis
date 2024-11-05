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
        <p className="pt-2">
          Felix og jeg har hatt en utrolig lærerik praksisperiode hos Phonero
          som systemutviklere. Gjennom denne perioden har vi fått dypere innsikt
          i moderne webutviklingsteknologier som React, TypeScript og GraphQL.
          Vi har fått muligheten til å jobbe med reelle prosjekter og
          arbeidsoppgaver, noe som har gitt oss verdifull erfaring i å utvikle
          og vedlikeholde komplekse systemer. Vi har også lært viktigheten av
          god kodestruktur og samarbeid i et utviklingsteam. Alt i alt har denne
          praksisperioden vært en uvurderlig del av vår utdanning og har
          forberedt oss godt for fremtidige utfordringer i arbeidslivet.
        </p>
        <p className="py-2">
          I tillegg har vi blitt kjent med verktøy som Jira for å håndtere
          oppgaver og Jira-tickets for å organisere arbeidet vårt effektivt. Vi
          har også lært om "conventional commits" og hvordan dette bidrar til en
          mer strukturert og forståelig commit-historikk. Kombinasjonen av
          "conventional commits" og Jira-tickets har gitt oss en god forståelse
          på hvordan prosjektarkitekturen kan se ut. Disse erfaringene har
          ytterligere styrket vår forståelse av viktigheten av god
          prosjektstyring og samarbeid i et utviklingsteam.
        </p>
        <p className="py-2">
          I starten av praksisperioden hadde vi varierte oppgaver tildelt på
          Jira. Disse oppgavene startet med enkle oppgaver som hjalp oss å bli
          komfortable med systemene og verktøyene vi skulle bruke. Etter hvert
          som vi ble mer erfarne, fikk vi gradvis vanskeligere oppgaver. Denne
          progresjonen ga oss en mestringsfølelse og tillot oss å bryne oss på
          større og mer komplekse utfordringer. Dette har vært en viktig del av
          vår læringsprosess og har gitt oss verdifull erfaring.
        </p>
        <p className="py-2">
          Takket være Phonero har vi nå fått lært hvordan det er å jobbe i team
          og med ulike features. Vi har fått innsikt i hvordan man effektivt kan
          samarbeide med kolleger, dele oppgaver og sikre at alle jobber mot et
          felles mål. Vi har også fått erfaring med å delta i daglige stand-ups,
          sprint-planlegging og retrospektiver, noe som har gitt oss en dypere
          forståelse av smidige metoder og hvordan de kan forbedre
          utviklingsprosessen.
        </p>
        <p className="py-2">
          Gjennom denne praksisperioden har vi forbedret våre ferdigheter i
          teknologier som React, TypeScript og GraphQL. Vi føler oss nå mer
          komfortable med å bruke disse verktøyene til å bygge robuste og
          skalerbare applikasjoner. Samtidig har vi fått en bedre forståelse av
          god praksis innenfor koding, testing og deployering.
        </p>
        <p className="py-2">
          Alt i alt har denne praksisperioden hos Phonero vært en uvurderlig del
          av vår utdanning. Vi føler oss nå bedre rustet til arbeidslivet, både
          teknisk og profesjonelt. Vi er takknemlige for muligheten til å ha
          jobbet med så dyktige mennesker og ser frem til å ta med oss all denne
          kunnskapen og erfaringen inn i våre fremtidige karrierer.
        </p>
      </div>
    </div>
  );
};

export default Phonero_Refleksjon;
