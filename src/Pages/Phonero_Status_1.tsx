import phonero from "../assets/phoneroLogoSmall.png";
import phoneroPhoneView from "../assets/PhoneroMobileView.png";

const Phonero_Status_1 = () => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center ">
        <div>
          <div className="flex items-center space-x-3">
            <span className=" text-gray-600">18. August 2024</span>
          </div>
        </div>
        <img src={phonero} className="object-fit  p-4" />
      </div>
      <div className="p-2">
        <h2 className="text-2xl font-semibold">Om Phonero</h2>
        {/* Litt om phonero her */}
        <p>Noe her...</p>
        <div className="flex py-4">
          <div className="w-1/2 bg-green-200">
            <h2 className="text-2xl font-semibold ">Arbeidsoppgaver</h2>
            {/* Arbeidsoppgaver beskrivelse her */}
            <p>noe her...</p>
          </div>
          <div className="w-1/2 bg-red-500">
            <img src={phoneroPhoneView} className="object-fit" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Refleksjon</h2>
          {/* Hva gikk dårlig, hva har gått bra, spennende elns her.. */}
          <p>Noe her..</p>
        </div>
      </div>
    </div>
  );
};

export default Phonero_Status_1;
