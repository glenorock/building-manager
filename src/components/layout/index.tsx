import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";
import ConstructionIcon from "@mui/icons-material/Construction";
import SettingsIcon from "@mui/icons-material/Settings";

import * as Types from "../../types";
import * as buildingsData from "../../data/buildings";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  setter: React.Dispatch<React.SetStateAction<Types.BuildingsType|null|undefined>>
};

export default function Layout({ children,setter }: Props) {
  const [buildings, setBuildings] = useState<Types.BuildingsType[]>([]);
  useEffect(() => {
    buildingsData.getAll().then((data) => {
      setBuildings(data);
    });
  }, []);

  return (
    <div className="flex h-screen m-0">
      <div className="w-1/6 font-sans shadow-inner p-3 pb-0 overflow-x-auto flex flex-col m-3">
      <div className="border-solid border border-[#cacaca] mb-4 overflow-hidden rounded">
        <Select 
          fullWidth
          onChange={(e) =>{
            setter(
              buildings.find((ele) => ele.lable === e.target.value)
            )
          }}
        >
          {buildings.map((ele) => (
            <MenuItem value={ele.lable}>
              <div>{ele.lable}</div>
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="grow flex flex-col pb-4 text-stone-800 font-semibold border-[#cacaca] rounded border-solid border-2 ">
        <div className="grow flex flex-col pt-8">
          <div className="flex items-center p-2 m-2 hover:bg-indigo-300 cursor-pointer hover:text-white">
            <ApartmentIcon /> <span className="ml-4"> Gérer l'immeuble</span>
          </div>
          <div className="flex items-center p-2 m-2 hover:bg-indigo-300 cursor-pointer hover:text-white">
            <PeopleIcon /> <span className="ml-4">Sociétés partenaires</span>
          </div>
          <div className="flex items-center p-2 m-2 hover:bg-indigo-300 cursor-pointer hover:text-white">
            <ConstructionIcon /> <span className="ml-4">Mes paramètres</span>
          </div>
          <div className="flex items-center p-2 m-2 hover:bg-indigo-300 cursor-pointer hover:text-white">
            <SettingsIcon /> <span className="ml-4">Administration</span>
          </div>
        </div>
        <div className=" p-2 m-2 mt-4 mb-4 border-[#cacaca] flex justify-center items-center hover:bg-indigo-300 hover:text-white cursor-pointer">
          <button>
            {" "}
            <LogoutIcon /> Déconnecter
          </button>
        </div>
      </div>
    </div>
      <div className="grow m-3 mt-6 p-3">{children}</div>
    </div>
  );
}
