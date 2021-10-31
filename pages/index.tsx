import React from "react";

export default function Home() {
  return (
    <div className="page">
      <head>
        <title>Fancy Age Calculator</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <h1>Calculate your age</h1>
      <hr />
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="yearOfBirth">Year of birth</label>
            <input
              name="yearOfBirth"
              type="text"
              placeholder="1984"
              pattern="[0-9]{4}"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="submit" value="Calculate" className="is-full-width" />
          </div>
        </div>
      </form>
    </div>
  );
}
