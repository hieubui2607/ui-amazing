export function NoteHelp({ note, helpText }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <div
        style={{
          display: "inline-flex",
          fontWeight: "700",
          gap: "10px",
        }}
      >
        <p>{note}</p>
      </div>
      <i
        style={{
          display: "block",
          color: "#545454",
          fontSize: "11px",
          fontWeight: "400",
        }}
      >
        {helpText}
      </i>
    </div>
  );
}
