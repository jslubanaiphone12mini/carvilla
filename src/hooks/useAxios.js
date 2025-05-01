// src/hooks/useAxios.js
import { useState, useCallback } from 'react';
import axios from 'axios';
// import axiosInstance from './axiosInstance';

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async ({ method, url, data = null, headers = {}, params = {} }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
        params,
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { sendRequest, loading, error };
};

export default useAxios;
