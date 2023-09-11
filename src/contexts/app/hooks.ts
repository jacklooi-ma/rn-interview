import { useContext } from "react";
import { AppContext } from "./Context";
import { IAppContext } from "./types";

export const useAppContext = (): IAppContext => useContext(AppContext); 


