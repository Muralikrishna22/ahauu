import React from "react";
import '../../assets/css/Home/TripPlan.css'

const TripPlan = () => {
  return (
    <div className="trip_plan">
        <div>
            <div className="trip_plan_title">
                <span>TRIP PLAN</span>
            </div>
            <div className="trip_plan_subtitle">
                <span>
                    Proper Plan not only saves time,
                </span>
                <br />
                <span>
                    but also money too...
                </span>
            </div>
            <div className="submit_btn_block">
                <button className="submit_btn"> Submit </button>
            </div>
        </div>
        <div className="trip_desc">
            <textarea style={{borderRadius: '10px', backgroundColor: '#F1F1F1', padding: '15px'}} placeholder="Please Share your Trip Plan with us..." id="trip_plan" name="trip_desc" rows="7" cols="45" />
        </div>
    </div>
  );  
};

export default TripPlan;