import ReactGA from "react-ga";

export const AnalyticsEvent = (category, eventName, label) => {
  ReactGA.event({
    category: category,
    action: eventName,
    label: label,
  });
};
