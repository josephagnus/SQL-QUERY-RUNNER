import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const URL = "/json/categories.json";

const submitQuery = async () => {
    try {
      const response = await axios.get(URL);
      return response.data
    } catch(e) {
      console.log('Caught error: ', e)
    }
}

const useSubmitQuery = () => useMutation({ mutationFn: submitQuery, mutationKey: 'SUBMIT_QUERY'})

export default useSubmitQuery;