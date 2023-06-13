import React, { useState } from "react";
import "./bookingForm.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BookingFormPage = () => {
  //const location = useLocation();
  //const car = location.state.car;
  const { id } = useParams();
  console.log("Selected Car ID:" + id);
  //console.log("kjasb" + props.id);

  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const handleSubmitClick = (id) => {
    alert("Clicxked" + id);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Car ID:", id);
    // Perform form submission logic here
    // You can send the form data to an API or perform any other actions
    try {
      // Send a DELETE request to the API endpoint with the object ID
      const response = await fetch(`https://fypbookingbea.adaptable.app/api/cars/${id}`, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      });

      // Object deleted successfully, perform any necessary actions

      // Reset the form fields by clearing the state variables
      setName("");
      setHours("");
      setPhone("");
      setCnic("");
      setDrivingLicense("");
      console.log(response);
      if (response.ok) {
        toast.success("Car status has been updated.")
        // Object deleted successfully
        console.log("Car object deleted");
        // Perform any necessary actions after deletion
      } else {
        // Handle error response if deletion was unsuccessful
        toast.error("Their was an error in updating the Car status.")
        console.error("Failed to delete car object");
      }
    } catch (error) {
      console.error("Error deleting object:", error);
    }
    // Reset form fields
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Booking Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* </div> */}
          <div className="form-group">
            <label className="form-label" htmlFor="hours">
              Hours:
            </label>
            <input
              className="form-input"
              type="text"
              id="text"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="form-input"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cnic">
              CNIC:
            </label>
            <input
              className="form-input"
              type="text"
              id="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="drivingLicense">
              Driving License:
            </label>
            <input
              className="form-input"
              type="text"
              id="drivingLicense"
              value={drivingLicense}
              onChange={(e) => setDrivingLicense(e.target.value)}
              required
            />
          </div>
          <button
            //onClick={() => handleFormSubmit(id)}
            className="form-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormPage;
