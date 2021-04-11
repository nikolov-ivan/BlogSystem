import ReactWeather, { useOpenWeather } from "react-open-weather";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "4770333a384e7cb8dbea1373dd11ae5a",
    lat: "43.204666",
    lon: "27.910543",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <div className={styles.sidebar}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Varna"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default Sidebar;
