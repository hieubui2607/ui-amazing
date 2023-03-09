import {
    Page,
    Tabs,
    TextField,
    DropZone,
    Select,
    Checkbox,
    Icon,
  } from "@shopify/polaris";
  import React, { useState, useCallback } from "react";
  import { AmazingBarCT, OptionSetsForm, ResourceBar  } from "../../components/customization-options";
  
  
  function ResourceTabel() {
    return (
      <ResourceBar>
        <div style={{ margin: "20px 0" }}>
          <div
            style={{
              display: "inline-flex",
              fontWeight: "700",
              gap: "10px",
            }}
          >
            <p>Data Input</p>
          </div>
          <i
            style={{
              display: "block",
              color: "#545454",
              fontSize: "11px",
              fontWeight: "400",
            }}
          >
            Enter the specifics of your printing capabilities for text
          </i>
        </div>
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2.5fr",
            gap: "10px",
          }}
        >
          <TextField
            label="Label*"
            type="text"
            // value={textFieldValue}
            // onChange={handleTextFieldChange}
            placeholder="Sender's Line"
            helpText={<i>You have 78 of 100 charaters remaining</i>}
          />
          <TextField
            label="Instructions (Optional)"
            type="text"
            // value={textFieldValue}
            // onChange={handleTextFieldChange}
            placeholder="Instructions"
            helpText={<i>You have 182 of 200 charaters remaining</i>}
          />
        </div>
      </ResourceBar>
    );
  }

  
  export default function DataField() {
    const [selected, setSelected] = useState(0);
  
    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      []
    );
  
    console.log(selected);
    const tabs = [
      {
        id: "all-customers-1",
        content: "Dashboard",
        accessibilityLabel: "All customers",
        panelID: "all-customers-content-1",
      },
      {
        id: "accepts-marketing-1",
        content: "Options Sets",
        panelID: "accepts-marketing-content-1",
      },
      {
        id: "assets-customers-content-1",
        content: "Assets",
        panelID: "assets-customers-content-1",
      },
      {
        id: "price-1",
        content: "Price Sets",
        panelID: "price-customers-content-1",
      },
      {
        id: "datas-1",
        content: "Data Sets",
        panelID: "data-customers-content-1",
      },
      {
        id: "settings-1",
        content: "Settings",
        panelID: "settings-customers-content-1",
      },
      {
        id: "help-1",
        content: "Help",
        panelID: "help-customers-content-1",
      },
    ];
  
    return (
      <Page fullWidth divider>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <AmazingBarCT>
            <OptionSetsForm />
            <ResourceTabel />
          </AmazingBarCT>
        </Tabs>
      </Page>
    );
  }
  