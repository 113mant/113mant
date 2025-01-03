import { useState, useEffect } from "react";
import ScatterPlot from "./ScatterPlot";
import { min } from "d3";

// const csvUrl = "https://gist.github.com/113mant/db17bb51319881eb16730f71adea15a9/raw/5254e0c914765a115e0fb88b27e53ebea8bcea48/points.csv";
// const jsonUrl = "http://gist.github.com/113mant/db17bb51319881eb16730f71adea15a9/raw/5254e0c914765a115e0fb88b27e53ebea8bcea48/points.json";
// const csvUrl = "https://gist.githubusercontent.com/mbostock/3305937/raw/bb5d3b1a7e1ef2cddc6e8b9b9f2c8b0d1d7f8b7f/points.csv";
// const jsonUrl = "https://gist.githubusercontent.com/mbostock/3305937/raw/bb5d3b1a7e1ef2cddc6e8b9b9f2c8b0d1d7f8b7f/points.json";
// const csvUrl = "http://localhost:5500/points.csv";
const jsonUrl = "/points.json";
const width = window.innerWidth;
const height = window.innerHeight;
const sSize = min([width, height]);
const xKey = "lon";
const yKey = "lat";

export default function GPSLogViz() {
  const [jsonData, setJSONData] = useState(null);

  useEffect(() => {
    fetch(jsonUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(`data ${data.length}`);
            // temp adjustments
            setJSONData(data.map((d) => ({ lat: d.lat, lon: d.lon })));
        });
    //   .then((response) => response.text())
    //   .then((text) => {
    //     const rows = text.split("\n");
    //     const data = rows.map((row) => row.split(","));
    //       some more temp adjustments to parse numbers
    //     setData(data);
    //   });
  }, []);

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>GPS Log Viz</h1>
      <ScatterPlot width={sSize} height ={sSize} data={jsonData} xKey={xKey} yKey={yKey}/>
    </div>
  );
}