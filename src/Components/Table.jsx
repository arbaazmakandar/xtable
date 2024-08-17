import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleDate = () => {
    setData(data.slice().sort((a, b) => new Date(b.date) - new Date(a.date)));
  };
  const handleViews = () => {
    setData(data.slice().sort((a, b) => b.views - a.views));
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort By Date</button>
      <button onClick={handleViews}>Sort By Views</button>

      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
