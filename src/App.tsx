import "./App.css";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgrey",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "90%" : 1000,
          flexGrow: 1,
          backgroundColor: "white",
          marginLeft: isMobile ? 5 : undefined,
          marginRight: isMobile ? 5 : undefined,
          paddingLeft: 5,
          paddingRight: 5,
          height: "100%",
        }}
      >
        <div>
          Your application's content goes here. Mobile users won't be able to
          see the grey bars on the side.
        </div>
        <div>
          When someone accesses the ./index.html at the project root, they'll be
          directed into the /build folder, which is convenient.
        </div>
      </div>
    </div>
  );
}

export default App;
