import { TextField, RadioButton, FormLayout, Icon } from "@shopify/polaris";
import { QuestionMarkInverseMinor } from "@shopify/polaris-icons";
import React, { useState, useCallback } from "react";
import { NoteHelp } from "./NoteHelp";

export function OptionSetsForm() {
  const [value, setValue] = useState("disabled");

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );
  return (
    <>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              label="Label *"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
              placeholder="Information Customized"
              helpText={<i>You have 78 of 100 characters remaining</i>}
            />
            <TextField
              label="Instructions (Optional)"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
              placeholder="How to do it ^.^"
              multiline={4}
              helpText={<i>You have 78 of 100 characters remaining</i>}
            />
          </FormLayout.Group>
        </FormLayout>
      </div>
      <NoteHelp
        note="Add the customization options available for your item."
        helpText="Customization options appear as a list in the 'customize now' window.
                  Option can include capacity, color, item asset, material, pattern,
                  text, data, image and option dropdown."
      />
    </>
  );
}
