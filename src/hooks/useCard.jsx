import { useEffect, useState } from "react";

const URL_DATA = "https://api.adviceslip.com/advice";

export default function useCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL_DATA);

      if (!response.ok) {
        console.log(Error);
      }
      const dataResponse = await response.json();
      console.log("render");
      setData(dataResponse.slip);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw Error;
    }
  };

  return {
    data,
    loading,
    fetchData,
  };
}
