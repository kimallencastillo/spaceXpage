import { useEffect } from "react";

function space(props) {
  console.log(props.link?.mission_patch_small);

  return (
    <div className="min-w-[350px] min-y-[350px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={props.links?.mission_patch_small}
          />

          <h1>{props.mission_name}</h1>
          <p className="text-lg text-black font-semibold">
            {props.launch_date_local}
          </p>
          <p className="text-slate-500 font-medium">
            {props.launch_site?.site_name_long}
          </p>
          <p className="text-slate-500 font-medium">
            {props.rocket?.rocket_name}
          </p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Details
        </button>
      </div>
    </div>
  );
}

export default space;
