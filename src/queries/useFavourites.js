import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

const getUrl = (key) => `/json/${key}.json`;

const queries = {
  employees: {
    queryFn: async () => {
      const url = getUrl("employees");
      try {
        const response = await axios.get(url);
        return response.data.map((item) => {
          const newAddress = Object.values(item.address).join(" ,");
          return {
            ...item,
            address: newAddress,
            id: item.employeeID,
            birthDate: dayjs(item.birthDate).format("DD/MM/YYYY"),
            hireDate: dayjs(item.hireDate).format("DD/MM/YYYY"),
          };
        });
      } catch (e) {
        console.log("Caught error: ", e);
      }
    },
  },
  orders: {
    queryFn: async () => {
      const url = getUrl("orders");
      try {
        const response = await axios.get(url);
        return response.data.map((item) => {
          const newAddress = Object.values(item.shipAddress).join(" ,");
          const details = JSON.stringify(item.details);
          return {
            ...item,
            shipAddress: newAddress,
            id: item.orderID,
            details,
          };
        });
      } catch (e) {
        console.log("Caught error: ", e);
      }
    },
  },
};

const useFavourites = (key) => {
  const { queryFn, onSuccess } = queries[key] || {};
  return useQuery({
    queryFn,
    queryKey: [`FAVOURITES-${key}`],
    enabled: !!key,
    onSuccess,
  });
};

export default useFavourites;
