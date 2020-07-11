import React from "react";
import Moment from 'react-moment';
const CharactersQuery = ({ data }) => {
  const { id, links, launch_success, mission_name, launch_date_local } = data;
  return (
    <>
        <div className="rounded overflow-hidden " key={id}>
          <img
            className="w-full imageLaunches"
            src={links.flickr_images}
            alt="Card cap"
          />
          <div className="px-6 py-4 bg-white">
            <div className=" text-xl mb-2">
              {console.log(launch_success)}
              <p className={launch_success ? "text-green-500" : "text-red-500"}>
                {mission_name}
              </p>
            </div>
            <p className="text-gray-700 text-base">
              Fecha de lanzamiento: <Moment format='lll'>{launch_date_local}</Moment> 
            </p>
            <a
              className="inline-block align-baseline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href={links.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </div>
        </div>
      
    </>
  );
};

export default CharactersQuery;
