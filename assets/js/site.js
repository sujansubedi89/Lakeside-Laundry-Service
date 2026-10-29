(() => {
  "use strict";

  const WHATSAPP_NUMBER = "9779846958184";
  const GA_MEASUREMENT_ID = "[PLACEHOLDER: GA4 measurement ID; example G-XXXXXXXXXX]";
  const pagePath = window.location.pathname;
  const digitsOnly = WHATSAPP_NUMBER.replace(/\D/g, "");
  const whatsappBase = digitsOnly && !WHATSAPP_NUMBER.includes("PLACEHOLDER")
    ? `https://wa.me/${digitsOnly}`
    : "https://wa.me/";

  function setWhatsAppLink(link, message) {
    link.href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  }

  function trackEvent(eventName, location) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        page_path: pagePath,
        button_location: location
      });
    }
  }

  document.querySelectorAll("[data-wa-message]").forEach((link) => {
    setWhatsAppLink(link, link.dataset.waMessage);
    link.addEventListener("click", () => {
      trackEvent("whatsapp_click", link.dataset.trackLocation || "unspecified");
    });
  });

  document.querySelectorAll("a[href^='tel:']").forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("phone_click", link.dataset.trackLocation || "unspecified");
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("is-open", !isExpanded);
    });
  }

  document.querySelectorAll(".order-form").forEach((form) => {
    const submitButton = form.querySelector("button[type='submit']");
    const pageMessage = submitButton?.dataset.waMessage || "Hi, I'd like to ask about laundry service.";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = new FormData(form);
      const name = String(fields.get("name") || "").trim();
      const location = String(fields.get("location") || "").trim();
      const service = String(fields.get("service") || "").trim();
      const pickupTime = String(fields.get("pickup_time") || "").trim();
      const message = [
        pageMessage,
        name ? `Name: ${name}` : "",
        location ? `Hotel/location: ${location}` : "",
        service ? `Service: ${service}` : "",
        pickupTime ? `Preferred pickup time: ${pickupTime}` : ""
      ].filter(Boolean).join("\n");

      trackEvent("order_helper_submit", form.dataset.trackLocation || "order-helper");
      window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  });

  if (GA_MEASUREMENT_ID.startsWith("G-") && !GA_MEASUREMENT_ID.includes("PLACEHOLDER")) {
    const analyticsScript = document.createElement("script");
    analyticsScript.async = true;
    analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.append(analyticsScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }
})();