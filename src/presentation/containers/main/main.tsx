import { Grid } from "@mui/material";
import "./main.scss";
import Card from "../../../design/molecules/card/card";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../../language/i18n";

const useLanguage = () => {
  useEffect(() => {
    const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);
};

const Main = () => {
  useLanguage();
  const { t } = useTranslation();
  return (
    <main className="main">
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          container
        >
          <Card
            title="Marvel"
            image="https://hips.hearstapps.com/hmg-prod/images/peliculas-marvel-extras-disney-plus-1569396431.jpg"
            description={t("marvel_description")}
            url="/mf1"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Card
            title="DC"
            image="https://beebom.com/wp-content/uploads/2023/08/Untitled-design-2023-08-09T152938.473.jpg?w=750&quality=75"
            description={t("dc_description")}
            url="mf2"
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default Main;
