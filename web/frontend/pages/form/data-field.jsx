import {
  Page,
  Tabs,
  ButtonGroup,
  Button,
  PageActions,
  TextField,
  ChoiceList,
  Checkbox,
  RadioButton,
  Layout,
  FormLayout,
  Icon,
} from "@shopify/polaris";
import { QuestionMarkInverseMinor } from "@shopify/polaris-icons";
import React, { useState, useCallback, Children } from "react";

function OptionSet({ children }) {
  return (
    <Page
      breadcrumbs={[{ content: "Home", url: "#" }]}
      title="New option set"
      divider
      primaryAction={
        <ButtonGroup>
          <Button>Exit without save</Button>
          <div style={{ color: "#00a0ac" }}>
            <Button monochrome outline>
              Condition
            </Button>
          </div>
          <div style={{ color: "#2c88d9" }}>
            <Button monochrome outline>
              Preview
            </Button>
          </div>
          <div>
            <Button
              primary
              connectedDisclosure={{
                accessibilityLabel: "Other save actions",
                actions: [{ content: "Save as draft" }],
              }}
            >
              Save
            </Button>
          </div>
          <div></div>
        </ButtonGroup>
      }
    >
      {children}
    </Page>
  );
}

function OptionSetsForm() {
  const [value, setValue] = useState("disabled");

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );
  return (
    <Page fullWidth>
      <div>
        <div
          style={{
            display: "inline-flex",
            fontWeight: "700",
            fontSize: "18px",
            gap: "10px",
          }}
        >
          <p>Preview type</p>
          <Icon source={QuestionMarkInverseMinor} color="primary" />
        </div>
        <i style={{ display: "block", color: "#545454" }}>
          Add preview image for the item
        </i>
        <div
          style={{
            display: "inline-flex",
            padding: "1rem 0",
            gap: "2rem",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          <RadioButton
            label="Product thumbnail"
            checked={value === "disabled"}
            id="disabled"
            name="accounts"
            onChange={handleChange}
          />
          <RadioButton
            label="Custom"
            checked={value === "disabled"}
            id="disabled"
            name="accounts"
            onChange={handleChange}
          />
        </div>
      </div>
      <FormLayout> 
        <FormLayout.Group>
          <div style={{ Gap: '10px'}}>
            <TextField
              label="Label *"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
              placeholder="Information Customized"
              helpText="You have 78 of 100 characters remaining"
            />
            <TextField
              label="Instructions (Optional)"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
              placeholder="How to do it ^.^"
              multiline={4}
              helpText="You have 78 of 100 characters remaining"
            />
          </div>

          <div />
        </FormLayout.Group>
      </FormLayout>
    </Page>
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
        <OptionSet>
          <OptionSetsForm />
        </OptionSet>
      </Tabs>
    </Page>
  );
}
