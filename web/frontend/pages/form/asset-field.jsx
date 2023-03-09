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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 5fr 1.5fr 3fr",
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
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <Select
                label="Min"
                type="number"
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
                // onChange={handleSelectTypeChange}
              />
              <Select
                label="Max"
                type="number"
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
                // onChange={handleSelectConditionChange}
              />
            </div>
            <p
              style={{
                paddingTop: "5px",
                color: "#6d7175",
                whiteSpace: "nowrap",
              }}
            >
              <i>Character limitted</i>
            </p>
          </div>
          <TextField
            label="Lines of text allowed*"
            type="number"
            // error={isInvalid}
            // id={textFieldID}
            value="1"
            // onChange={handleTextFieldValueChange}
          />
        </div>
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
  