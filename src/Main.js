import React from "react";

export default function Main() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <center>
        <h1 style={{ color: "#072a40" }}>Covid 19 Prediction</h1>
      </center>
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: "90%",
            margin: "20px",
            padding: "10px",
            textAlign: "left",
            border: "1px solid #888888",
            boxShadow: "5px 2px 10px #888888",
          }}
        >
          <h2>What is Covid-19?</h2>
          <p>
            COVID-19 is a new strain of coronavirus that has not been previously
            identified in humans. The COVID-19 is the cause of an outbreak of
            respiratory illness first detected in Wuhan, Hubei province, China.
            Since December 2019, cases have been identified in a growing number
            of countries. The District’s surveillance data can be found here.
            Coronaviruses are a large family of viruses that are known to cause
            illness ranging from the common cold to more severe diseases such as
            Severe Acute Respiratory syndrome (SARS) and Middle East Respiratory
            Syndrome (MERS).
          </p>
        </div>
      </div>
    </div>
  );
}
