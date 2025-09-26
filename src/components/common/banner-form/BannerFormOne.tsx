import { useState } from "react";

const BannerFormOne = () => {
  const [activeTab, setActiveTab] = useState("Tour");
  
  const tabs = ["Tour", "Hotel", "Restaurant", "Rental", "Activity", "Car Rental"];

  return (
    <div className="tg-booking-form">
      <div className="tg-booking-form-nav">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li key={tab} className="nav-item">
              <button 
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <i className="fa-regular fa-map-marker-alt"></i>
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tg-booking-form-content">
        <form>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="tg-booking-form-input">
                <label>Destinations:</label>
                <input 
                  type="text" 
                  placeholder="Where are you going..."
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="tg-booking-form-input">
                <label>Check In:</label>
                <input 
                  type="date" 
                  className="form-control"
                  defaultValue="2025-09-25"
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="tg-booking-form-input">
                <label>Check Out:</label>
                <input 
                  type="date" 
                  className="form-control"
                  defaultValue="2025-09-26"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tg-booking-form-input">
                <label>Guest:</label>
                <select className="form-select">
                  <option>+ Add Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="tg-booking-form-btn">
                <button type="submit" className="tg-btn w-100">
                  Search <i className="fa-regular fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerFormOne;