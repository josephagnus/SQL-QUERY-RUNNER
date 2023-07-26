import { useCallback, useState, memo, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import Table from "../components/Table";
import Dropdown from "../components/Dropdown/Dropdown";

import queries from "./constants";

import useFavourites from "../queries/useFavourites";
import useSubmitQuery from "../queries/useSubmitQuery";

import styles from "./SqlQueryView.module.scss";

const SqlQueryView = () => {
  const [query, setQuery] = useState("");
  const { mutate, data } = useSubmitQuery();
  const [selectedFavourite, setSelectedFavourite] = useState(null);

  const favouriteSelectHandler = useCallback(
    (value) => setSelectedFavourite(value),
    []
  );

  const setSQLQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const clearQuery = useCallback(() => {
    setQuery("");
    setSelectedFavourite(null);
  }, []);

  const submitQuery = useCallback(() => {
    setSelectedFavourite(null);
    mutate();
  }, [mutate]);

  const { data: tableData } = useFavourites(selectedFavourite);

  useEffect(() => {
    console.log('table data changed')
  }, [tableData])

  useEffect(() => {
    console.log('data changed')
  }, [tableData])


  return (
    <div style={{ display: "flex" }}>
      <div className={styles.container}>
        <textarea onChange={setSQLQuery} value={query} />
        <div className={styles.btnGrp}>
          <Button onClick={clearQuery} disabled={!query}>Clear</Button>
          <Button onClick={submitQuery} disabled={!query}>Submit</Button>
          <div style={{ paddingTop: 48 }}>
            <Dropdown
              options={queries}
              label="Favourites"
              onSelected={favouriteSelectHandler}
            />
          </div>
        </div>
      </div>
      <Divider />
      <div style={{ overflow: 'auto' }}>{(tableData || data) && <Table data={tableData || data} />}</div>
    </div>
  );
};

export default memo(SqlQueryView);
