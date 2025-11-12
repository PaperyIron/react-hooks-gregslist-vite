import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => {
        if(!r.ok) {throw new Error('failed to get listings')}
        return r.json()
      })
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
  }, [])

  const addListing = newListing => setListings(previousListings => [...previousListings, newListing]);

  const updateListing = updatedListing => 
    setListings(previousListings => previousListings.map(listing => 
      listing.id === updatedListing.id ? updatedListing : listing
    ));

  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer listings={listings} updateListing={updateListing}/>
    </div>
  );
}

export default App;
