
import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
    console.log("dfgdfg")
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;