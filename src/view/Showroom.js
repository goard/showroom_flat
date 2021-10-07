import React, { useCallback, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Topbar from "./components/Topbar";
import Content from "./components/Content";
import { useHttp } from "../hooks/http.hook";

const Showroom = () => {
  const { loading, request } = useHttp();
  const [flatData, setFlatData] = useState(null);

  const fetchFlat = useCallback(async () => {
    try {
      const fetched = await request(
        "https://raw.githubusercontent.com/FrolovArkadiy/task_for_middle/master/entities.json",
        "GET",
        null
      );
      if (typeof fetched === "object" && fetched !== null) {
        const data = fetched.hasOwnProperty("response")
          ? fetched.response
          : null;
        setFlatData(data);
        return;
      }
      setFlatData(null);
    } catch (error) {}
  }, [request]);

  useEffect(() => {
    fetchFlat();
  }, []);

  return (
    <Container>
      <Topbar />
      {flatData ? <Content data={flatData} /> : <CircularProgress />}
    </Container>
  );
};

export default Showroom;
