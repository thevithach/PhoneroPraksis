import phonero from "../assets/phoneroLogoSmall.png";

const Phonero_Status_1 = () => {
  return (
    <div className="container mx-auto max-w-screen-lg h-[85vh] p-4">
      <div className="flex justify-between px-2 items-center ">
        <div>
          <div className="flex items-center space-x-3">
            <span className="p-2 text-gray-600">Date:</span>
          </div>
        </div>
        <img src={phonero} className="object-fit  p-4" />
      </div>
    </div>
  );
};

export default Phonero_Status_1;
