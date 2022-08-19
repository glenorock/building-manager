import Layout from "../components/layout";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as Types from "../types";
import { useState } from "react";

const currentYear = new Date().getFullYear();
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const years: number[] = range(currentYear, currentYear - 50, -1);

export default function Dashboard() {
  const [data, setData] = useState<Types.BuildingsType | undefined | null>(
    undefined
  );
  return (
    <Layout setter={setData}>
      <div className="flex flex-col h-full text-slate-500 font-semibold">
        <div className="flex item-center justify-between mb-2">
          <div className="flex justify-between items-center">
            Address <span className="ml-2 text-black ">{data?.addresse}</span>
          </div>
          <div className="flex justify-between items-center">
            Immaticulation{" "}
            <span className="ml-2 text-black ">{data?.matriculation}</span>
          </div>
          <div className="flex justify-between items-center">
            <div>Annee</div>
            <div className="grow ml-4 min-w-40">
              <Autocomplete
                multiple
                id="tags-standard"
                options={years}
                getOptionLabel={(option) => `${option}`}
                defaultValue={[years[0]]}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" type={"number"} />
                )}
              />
            </div>
          </div>
          <div>
            <button className="border-solid border-2 border-[#cacaca] rounded p-1 pl-4 pr-4 hover:bg-indigo-300 cursor-pointer hover:text-white flex justify-between items-center">
              <CheckCircleOutlineIcon />{" "}
              <span className="pl-2">Générer CE</span>
            </button>
          </div>
        </div>
        <div className="grow flex flex-col overflow-y-auto">
          <div className="border-solid border-2 border-[#cacaca] rounded p-3 grow overflow-y-auto">
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Caractéristiques</div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div className="flex">
                      <div>Générales</div>
                      <div className="ml-4 border-solid border-2 border-transparent rounded bg-indigo-300 pl-3 pr-3">
                        Equipements
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Chaudière gaz"
                        labelPlacement="start"
                        className="m-4"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Piscine"
                        labelPlacement="start"
                        className="m-4"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Chauffe eau"
                        labelPlacement="start"
                        className="m-4"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Compteur eau"
                        labelPlacement="start"
                        className="m-4"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Desenfumage"
                        labelPlacement="start"
                        className="m-4"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Gardien"
                        labelPlacement="start"
                        className="m-4"
                      />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Assemblées Générales</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Travaux</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Employés</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Conseil syndical</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Diagnostiques</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
            <div className="m-4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>Photos</div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="border-solid border-2 border-[#cacaca] rounded p-3 flex justify-end">
            <button className="border-solid border-2 border-[#cacaca] rounded p-3 mr-4 hover:bg-indigo-300 cursor-pointer hover:text-white">
              <SaveIcon /> Enregistrer
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
