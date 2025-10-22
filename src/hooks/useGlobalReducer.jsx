import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();
const BASE_URL = "https://www.swapi.tech/api/";

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const fetchData = async (resource) => {
    try {
      const key = resource;
      let dataArray = JSON.parse(localStorage.getItem(key)) || [];

      if (!dataArray.length) {
        const response = await fetch(`${BASE_URL}${resource}/`);
        const data = await response.json();

        const details = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const detail = await res.json();
            return detail.result;
          })
        );

        dataArray = details;
        localStorage.setItem(key, JSON.stringify(dataArray));
      }

      const actionMap = {
        people: "SET_CHARACTERS",
        vehicles: "SET_VEHICLES",
        planets: "SET_PLANETS",
      };

      dispatch({ type: actionMap[resource], payload: dataArray });
    } catch (error) {
      console.error(`Error fetching ${resource}:`, error);
    }
  };

  useEffect(() => {
    fetchData("people");
    fetchData("vehicles");
    fetchData("planets");
  }, []);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}
