import React from "react";

export const SearchBar = ({ city, onChange, onSearch }) => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
      <input
        value={city}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        placeholder="Enter city name"
        style={{width: "300px", borderRadius: "5px", padding: "10px", border: "1px solid #ccc"}}
      />

      <button onClick={onSearch} style={{backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none",height:"40px"}}>
        Search
      </button>
    </div>
  );
};
