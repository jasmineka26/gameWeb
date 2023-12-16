import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: platform[];
}
const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { platforms, error, isLoading };
};

export default usePlatforms;
