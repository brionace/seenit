import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useUploads(offset) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const fetchUploads = useCallback(async () => {
    try {
      
      await setLoading(true);
      await setError(false);

      const res = await axios.get('https://www.breakingbadapi.com/api/characters',{ 
          params: {
            limit: offset,
            offset: offset
          }
       });

      await setList(prev => [...prev, ...res.data]);
      setLoading(false);

    } catch (err) {
      setError(err);
    }
  }, [offset]);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads, offset]);

  return { loading, error, list };
}

export default useUploads;