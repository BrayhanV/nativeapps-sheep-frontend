import React, { createContext, useMemo, useReducer } from "react";
import { reducer } from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

const initialState = {
    reports: []
}

const Provider = ({ children }) => {
    const [reportState, dispatch] = useReducer(reducer, initialState);
    
    const reportActions = useMemo(() => ({
        setSavedReports: async () => {
            try{
                const reports = await AsyncStorage.getItem("reports");

                dispatch({ type: "SET_REPORTS", reports: reports ? JSON.parse(reports) : []})
            }catch(error){
                console.error(error)
            }
        },
        addReport: async newReport => {
            try{
                const tempReports = [...reportState.reports];
    
                tempReports.push(newReport);
                
                await AsyncStorage.setItem("reports", JSON.stringify(tempReports))
                dispatch({ type: "SET_REPORTS", reports: tempReports});
            }catch(error){
                console.error(error)
            }
        },
        removeReports: async () => {
            try{
                AsyncStorage.removeItem("reports");
                dispatch({ type: "SET_REPORTS", reports: [] })
            }catch(error){
                console.error(error);
            }
        }
    }));

    return <Context.Provider value={{...reportState, ...reportActions}}>{children}</Context.Provider>
}

export default {
    Provider,
    Consumer: Context.Consumer
}