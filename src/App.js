import Router from './components/routes/routes';
import ScrollToTop from './components/navigation/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Router />
    </div>
  );
}

export default App;
