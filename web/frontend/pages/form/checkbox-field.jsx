import {
    Page,
    Tabs,
    TextField,
    DropZone,
    Select,
    Checkbox,
    Icon,
  } from "@shopify/polaris";
  import {
    AddMajor,
    EditMajor,
    DeleteMajor,
    ChevronDownMinor,
  } from "@shopify/polaris-icons";
  import React, { useState, useCallback } from "react";
  import { AmazingBarCT, OptionSetsForm, ResourceBar,  } from "../../components/customization-options";
  
  
  
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
        <Checkbox
          label="Make this required for buyer"
          checked={true}
          // onChange={handleChange}
        />
        
      </ResourceBar>
    );
  }
  
  function DropZoneView() {
    const [files, setFiles] = useState([]);
  
    const handleDropZoneDrop = useCallback(
      (_dropFiles, acceptedFiles, _rejectedFiles) =>
        setFiles((files) => [...files, ...acceptedFiles]),
      []
    );
  
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  
    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <div style={{ padding: "0" }}>
        <div>
          {files.map((file, index) => (
            <div key={index}>
              <Thumbnail
                size="small"
                alt={file.name}
                source={
                  validImageTypes.includes(file.type)
                    ? window.URL.createObjectURL(file)
                    : NoteMinor
                }
              />
              <div>
                {file.name} <p>{file.size} bytes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
    return (
      <DropZone onDrop={handleDropZoneDrop}>
        {uploadedFiles}
        {fileUpload}
      </DropZone>
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
            <DropZoneView />
          </AmazingBarCT>
        </Tabs>
      </Page>
    );
  }
  