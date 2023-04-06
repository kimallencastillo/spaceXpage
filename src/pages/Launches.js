import React, { useEffect, useState } from "react";
import { baseUrl } from "../shared";
import axios from "axios";
// components
import Space from "../component/space";

export default function Launches() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const url = baseUrl;
    axios
      .get(url)
      .then((response) => {
        setLaunches(response.data);
        setLoading(false);
      })
      .then((error) => {
        console.log(error);
        setError(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  console.log(launches);
  return (
    <div>
      <h1 className="flex justify-center py-4">SpaceX Launches</h1>
      <div className="flex flex-wrap justify-center items-center">
        {launches
          ? launches.map((launch) => {
              return (
                <Space
                  key={launch.flight_number}
                  {...launch}
                  src={launch.links?.mission_patch_small}
                  alt={launch.mission_name}
                  mission_name={launch.mission_name}
                  launch_date_local={launch.launch_date_local}
                  site_name_long={launch.launch_site?.site_name_long}
                  rocket_name={launch.rocket.rocket_name}
                  loading={loading}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
