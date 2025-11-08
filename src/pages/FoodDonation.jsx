import React, { useState } from "react";
import FoodTracking from "../components/FoodTracking";
import "./FoodDonation.css";

const FoodDonation = () => {
  const [donationType, setDonationType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ngoName, setNgoName] = useState("");
  const [items, setItems] = useState([{ foodName: "", quantity: "", bestBefore: "" }]);

  const handleTypeSelect = (type) => {
    setDonationType(type);
    setSubmitted(false);
    setNgoName("");
    setItems([{ foodName: "", quantity: "", bestBefore: "" }]);
  };

  const handleItemChange = (index, e) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { foodName: "", quantity: "", bestBefore: "" }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ngoName) {
      alert("Please enter NGO Name");
      return;
    }

    try {
      // ✅ Correct fetch setup for JSON to Java Servlet
      const res = await fetch("http://localhost:8082/ngo/api/food-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ngoName, donationType, items }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      alert(data.message);

      if (data.message.toLowerCase().includes("success")) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while registering. Please try again.");
    }
  };

  return (
    <div className="food-donation-container">
      <h2>Food Donation</h2>

      <div className="donation-type-buttons">
        <button onClick={() => handleTypeSelect("Ready-made Packed")}>Ready-made Packed</button>
        <button onClick={() => handleTypeSelect("Uncooked (Grains, Pulses, Oil)")}>Uncooked</button>
        <button onClick={() => handleTypeSelect("Remaining Food (Hotels/Functions)")}>Remaining Food</button>
      </div>

      {donationType && !submitted && (
        <form className="food-donation-form" onSubmit={handleSubmit}>
          <label>
            NGO Name:
            <input
              type="text"
              value={ngoName}
              onChange={(e) => setNgoName(e.target.value)}
              required
            />
          </label>

          {items.map((item, index) => (
            <div key={index} className="food-item">
              <h4>Item {index + 1}</h4>
              <label>
                Food Name:
                <input
                  type="text"
                  name="foodName"
                  value={item.foodName}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </label>
              <label>
                Quantity (kg):
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  min="1"
                  required
                />01
              </label>
              <label>

                Best Before:
                <input
                  type="date"
                  name="bestBefore"
                  value={item.bestBefore}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </label>
              {items.length > 1 && (
                <button type="button" onClick={() => removeItem(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addItem}>Add Another Item</button>
          <button type="submit">Submit Donation</button>
        </form>
      )}

      {submitted && (
        <div className="tracking-section">
          <h3>Track Your Food Donation</h3>
          <FoodTracking type={donationType} items={items} />
        </div>
      )}
    </div>
  );
};

export default FoodDonation;
