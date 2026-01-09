import Header from "../components/Header";
function Test() {
  return (
    <>
    <Header />
      <div
        style={{
          height: "calc(100vh - 60px)", // Header 높이만큼 제외
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          fontWeight: "bold",
        }}>
        Test Page
      </div>;

    </>
  )
}

export default Test;