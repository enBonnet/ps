import { useState, useCallback, useEffect } from "react";

import { getRegiones } from "../services";

const useRegiones = () => {
  const [regionList, setRegionList] = useState([]);

  const getRegionesCallback = useCallback(async () => {
    const { data } = await getRegiones();
    setRegionList(data);
  }, []);

  useEffect(() => {
    getRegionesCallback();
  }, [getRegionesCallback]);

  return {
    regionList,
  };
};

export default useRegiones;
