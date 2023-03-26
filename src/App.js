import Header from "./components/Header";
import "./App.scss";
import Banner from "./components/Banner";
import FromComponent from "./components/FormComponent";
// import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="page">
      <div className="loading" id="loading">
        <div className="loading-layout">
        <div className="loader"></div>
        </div>
      </div>
      <Header />
      <Banner />
      <div className="main-page">
        <FromComponent />
        {/* <ResultComponent /> */}
      </div>
    </div>
  );
}

export default App;

export const hideLoading = () => {
  document.getElementById("loading").style.display = "none";
};

export const showLoading = () => {
  document.getElementById("loading").style.display = "block";
};