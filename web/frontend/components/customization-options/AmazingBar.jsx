import {
  Page,
  ButtonGroup,
  Button,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";

export function AmazingBarCT ({children}) {
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
