import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/datatable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
