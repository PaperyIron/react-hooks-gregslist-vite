import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => {
        if(!r.ok) {throw new Error('failed to get listings')}
        return r.json()
      })
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
