import { Link } from "react-router-dom";
import phonero from "../../../assets/PhoneroLarge.png";
const Praksis = () => {
  return (
    <div className="bg-gray-50 p-4" id="Praksis">
      <div className="min-h-[85vh] container mx-auto max-w-screen-lg  ">
        <div className="p-4">
          <h1 className="font-medium bg-gradient-to-r from-red-400  to-red-500 bg-clip-text text-transparent text-5xl sm:text-6xl text-center p-4">
            Praksis - Phonero
          </h1>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 justify-center py-4 ">
          <div className="">
            <img
              src={phonero}
              className="object-contain rounded-lg shadow-md "
            />
          </div>
          <div className="p-4">
            <p className=" text-gray-600">Høst Internship med Phonero</p>
            <h2 className="text-3xl font-medium">Phonero - Praksis</h2>
            <p className="py-2">
              I løpet av høstsemesteret 2024 skal vi jobbe omtrent to dager i
              uken for Phonero gjennom praksisprogrammet ved UiA. Gjennom denne
              perioden skal vi utføre oppgaver som systemutviklere.
            </p>
            <Link to="/Phonero/Oppgavebeskrivelse">
              <button className="w-36 h-10 bg-gradient-to-r from-red-400  to-red-500 text-white rounded-md hover:opacity-90">
                Les mer
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 justify-center py-4 ">
          <div className="">
            <img
              src={phonero}
              className="object-contain rounded-lg shadow-md  "
            />
          </div>
          <div className="p-4">
            <p className=" text-gray-600">Høst Internship med Phonero</p>
            <h2 className="text-3xl font-medium">Phonero - Status 1</h2>
            <p className="py-2">
              Kommer etterhvert 🚀 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur libero nulla, mollis sit amet molestie
              a, volutpat at nibh. Etiam quis pellentesque ante.
            </p>
            <Link to="/Praksis/Phonero/Status/1">
              <button className="w-36 h-10 bg-gradient-to-r from-red-400  to-red-500 text-white rounded-md hover:opacity-90">
                Les mer
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Praksis;
