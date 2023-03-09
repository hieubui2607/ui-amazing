import {
    Icon,
  } from "@shopify/polaris";
  import {
    AddMajor,
    EditMajor,
    DeleteMajor,
    ChevronDownMinor,
  } from "@shopify/polaris-icons";
  import React, { useState, useCallback } from "react";
  
  
  export function ResourceBar({ children }) {
    return (
      <div
        style={{ backgroundColor: "#fff", marginBottom: "20px", padding: "10px" }}
      >
        <div
          style={{
            padding: "0 10px",
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "10px 10px 0 0",
            justifyContent: "center",
            lineHeight: "50px",
            borderBottom: "1px solid #000",
          }}
        >
          <h3 style={{ height: "50px", flexGrow: "1" }}>1</h3>
          <div style={{ display: "flex", height: "50px", flexGrow: "5" }}>
            <h3>Data1</h3>
            <Icon source={EditMajor} color="" />
          </div>
          <a style={{ height: "50px", flexGrow: "1" }}>
            <span>Condition</span>
          </a>
          <div style={{ display: "flex", flexGrow: "1" }}>
            <Icon source={AddMajor} color="base" />
            <Icon source={DeleteMajor} color="base" />
            <Icon source={ChevronDownMinor} color="base" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    );
  }