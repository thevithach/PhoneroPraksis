import React from "react";
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non urna luctus nisl mattis condimentum eu eget arcu. Nam sodales feugiat libero in vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non urna luctus nisl mattis condimentum eu eget arcu. Nam sodales feugiat libero in vestibulum."
            }
            github={"https://github.com/thevithach"}
            linkedin={"https://www.linkedin.com/in/vithethach/"}
            portfolio={"https://thevithach.vercel.app/"}
          />
          <HomeImageCard 
            picture={Felix} 
            name={"Felix Knutsen"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non urna luctus nisl mattis condimentum eu eget arcu. Nam sodales feugiat libero in vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non urna luctus nisl mattis condimentum eu eget arcu. Nam sodales feugiat libero in vestibulum."
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
