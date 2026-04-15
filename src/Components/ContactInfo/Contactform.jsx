"use client"
import React, { useState, useEffect } from "react";
import { CountryRegionData } from "react-country-region-selector";
import CustomDropdown from "./CustumeDrp";

// Defensive: fallback to [] if bad import
const COUNTRY_DATA = Array.isArray(CountryRegionData)
  ? CountryRegionData
  : Array.isArray(CountryRegionData?.default)
    ? CountryRegionData.default
    : [];

function parseCountryList() {
  return COUNTRY_DATA.map((row) => row[0]);
}

function parseRegionList(selectedCountry) {
  const found = COUNTRY_DATA.find((row) => row[0] === selectedCountry);
  let regionArr = found && found[2];
  if (!regionArr) return [];
  if (typeof regionArr === "string") {
    return regionArr.split("|").map((part) => part.split("~")[0]);
  }
  if (Array.isArray(regionArr)) {
    return regionArr.map(([region]) => region);
  }
  return [];
}

/**
 * ContactForm — Reusable form component
 *
 * Apni poori state khud manage karta hai.
 * Kisi bhi page/component mein seedha use karo.
 *
 * Props:
 *   apiEndpoint : string    (default: "/api/contact")
 *   onSuccess   : function  (optional — submit ke baad callback)
 *   onError     : function  (optional — error pe callback)
 *
 * Usage:
 *   <ContactForm />
 *   <ContactForm apiEndpoint="/api/contact" onSuccess={() => router.push("/thank-you")} />
 */
const ContactForm = ({
  apiEndpoint = "/api/contact",
  onSuccess,
  onError,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    companyName: "",
    companyUrl: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setCountryList(parseCountryList());
  }, []);

  useEffect(() => {
    setRegionList(parseRegionList(country));
    setRegion("");
  }, [country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      projectType: "",
      companyName: "",
      companyUrl: "",
      message: "",
    });
    setPhone("");
    setCountry("");
    setRegion("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // ✅ Saara data — phone, country, region bhi — backend ko jaata hai
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      projectType: formData.projectType,
      phone,
      companyName: formData.companyName,
      companyUrl: formData.companyUrl,
      country,
      region,
      message: formData.message,
    };

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccess("Your message has been sent successfully.");
      setTimeout(() => setSuccess(""), 3000);
      resetForm();
      onSuccess?.();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="contact-form"
      className="contact-form-items"
      onSubmit={handleSubmit}
    >
      <div className="row g-4">

        {/* Full Name */}
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <span>Full Name*</span>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div className="form-clt">
            <span>Your Email*</span>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{ paddingRight: "45px", width: "100%" }}
                required
              />
              <i
                className="bi bi-envelope"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.1rem",
                  color: "#999",
                  pointerEvents: "none"
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* Service Type + Phone */}
        <CustomDropdown
          variant="servicePhone"
          service={formData.projectType}
          onServiceChange={(val) =>
            setFormData((prev) => ({ ...prev, projectType: val }))
          }
          phoneNumber={phone}
          onPhoneNumberChange={setPhone}
        />

        {/* Company Name */}
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="form-clt">
            <span>Company Name</span>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Company URL */}
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div className="form-clt">
            <span>Company Url</span>
            <input
              type="url"
              name="companyUrl"
              id="companyUrl"
              placeholder="Company Url"
              value={formData.companyUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Country + Region */}
        <CustomDropdown
          variant="countryRegion"
          country={country}
          onCountryChange={setCountry}
          region={region}
          onRegionChange={setRegion}
          countryList={countryList}
          regionList={regionList}
        />

        {/* Message */}
        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
          <div className="form-clt">
            <span>Write Message*</span>
            <textarea
              name="message"
              id="message"
              placeholder="Write Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Success / Error */}
        {(success || error) && (
          <div className="col-lg-12">
            {success && (
              <p style={{ color: "#28a745", marginBottom: "8px" }}>{success}</p>
            )}
            {error && (
              <p style={{ color: "#dc3545", marginBottom: "8px" }}>{error}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
          <button type="submit" className="theme-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}{" "}
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

      </div>
    </form>
  );
};

export default ContactForm;
