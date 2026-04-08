'use client'
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryRegionData } from 'react-country-region-selector';

// Defensive: fallback to [] if bad import
const COUNTRY_DATA = Array.isArray(CountryRegionData)
  ? CountryRegionData
  : Array.isArray(CountryRegionData?.default)
    ? CountryRegionData.default
    : [];

const servicesOptions = [
  'Web3 & Blockchain',
  'Web Development',
  'App Development',
  'Graphics & Branding',
  'Digital Marketing',
  'E-commerce Solutions',
  '2D-3D Animations',
  'Ebooks',
];

function parseCountryList() {
  return COUNTRY_DATA.map(row => row[0]);
}
function parseRegionList(selectedCountry) {
  const found = COUNTRY_DATA.find(row => row[0] === selectedCountry);
  let regionArr = found && found[2];
  if (!regionArr) return [];
  if (typeof regionArr === 'string') {
    return regionArr.split('|').map(part => part.split('~')[0]);
  }
  if (Array.isArray(regionArr)) {
    return regionArr.map(([region]) => region);
  }
  return [];
}

// Styled Components

const ResponsiveFormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 12px;
  }
`;

const FormCol = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  
  box-sizing: border-box;
  z-index: 4;
  margin-bottom: 12px;

  .theme-dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
   
    background-color: transparent;
    border: none;
    border-radius: 5px;
    padding: 10px 12px;
    min-height: 44px;
    color: var(--text);
    font-size: 15px;
    font-weight: 500;
    transition: border-color .2s, box-shadow .2s;
    cursor: pointer;
    box-shadow: none;
    outline: none;
      border-color: var(--theme);
      box-shadow: 0 0 0 1px rgb(212, 220, 237);


    svg {
      width: 10px;
      height: 16px;
      fill: var(--text);
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: var(--text);
      font-size: 15px;
      font-weight: 500;
      padding: 0;
    }
  }
  .theme-dropdown-menu {
    position: absolute;
    left: 0;
    width: 100%;
    background: var(--white);
    border-radius: 0 0 5px 5px;
    margin-top: 2px;
    box-shadow: 0 10px 20px rgba(15, 22, 36, 0.08);
    border: 1px solid #D4DCED;
    overflow: auto;
    z-index: 4;
    animation: slideDown .25s cubic-bezier(.62,.28,.23,.99) forwards;
    padding: 5px 0;
    max-height: 215px;
    @media (max-width: 600px) {
      max-height: 170px;
    }
    @media (max-width: 400px) {
      max-height: 110px;
    }
  }
  .theme-dropdown-menu.up { bottom: 100%; border-radius: 5px 5px 0 0; }
  .theme-dropdown-menu.down { top: 100%; }
  .dropdown-search-field {
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 9px 18px 9px 18px;
    font-size: 15px;
    border-bottom: 1px solid #DBE4F6;
    margin-bottom: 2px;
    color: var(--text);
    background: none;
    &::placeholder {
      color: #b8b8b8;
      opacity: 1;
    }
    @media (max-width: 600px) {
      font-size: 13px;
      padding: 7px 11px 7px 14px;
    }
    @media (max-width: 400px) {
      font-size: 11.5px;
      padding: 5px 7px 5px 10px;
    }
  }
  .dropdown-option {
    color: var(--text);
    padding: 11px 22px;
    font-size: 15px;
    cursor: pointer;
    transition: background .16s, color .18s;
    user-select: none;
    min-height: 43px;
    display: flex;
    align-items: center;
    &:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--header);
    }
    &.selected {
      font-weight: 600;
      background: rgba(0, 0, 0, 0.04);
      color: var(--header);
      cursor: default;
    }
    @media (max-width: 600px) {
      font-size: 13.5px;
      min-height: 37px;
    }
    @media (max-width: 400px) {
      font-size: 11.5px;
      min-height: 30px;
    }
  }
`;

const StyledPhoneInput = styled(PhoneInput)`
  .form-control {
    background-color: transparent !important;
    border: 1px solid #D4DCED !important;
    border-radius: 5px !important;
    color: var(--text) !important;
    min-height: 50px !important;
    height: 50px !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    font-family: inherit !important;
    padding-left: 52px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .flag-dropdown {
    background: transparent !important;
    border: 1px solid #cacaca; !important;
    border-radius: 5px 0 0 5px !important;
  }
  .country-list {
    background: var(--white) !important;
    color: var(--text) !important;
    border-radius: 5px !important;
    border: 1px solid #D4DCED !important;
    font-size: 15px !important;
    font-family: inherit !important;
    max-height: 215px !important;
    overflow-y: auto !important;
    @media (max-width: 600px) {
      max-height: 150px !important;
    }
    @media (max-width: 400px) {
      max-height: 120px !important;
    }
  }
  .search-box {
    background: transparent !important;
    color: var(--text) !important;
    width:90%;
    height: 40px;
  }
  .highlight {
    background: rgba(0, 0, 0, 0.05) !important;
    color: var(--header) !important;
  }
`;

const ThemeWrapper = styled.div`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
`;

const SectionLabel = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 6px;
  color: var(--header, #222);
`;

const DROPDOWN_MAX_VISIBLE = 4;

const CustomDropdown = ({
  variant, // 'servicePhone' | 'countryRegion' – only that row is rendered
  value,
  onChange,
  service = value,
  onServiceChange = onChange,
  phoneNumber,
  onPhoneNumberChange,
  country: countryProp,
  onCountryChange,
  region: regionProp,
  onRegionChange,
  countryList: countryListProp,
  regionList: regionListProp,
}) => {
  const showServicePhone = !variant || variant === 'servicePhone';
  const showCountryRegion = !variant || variant === 'countryRegion';

  // Service Dropdown state
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceUpward, setServiceUpward] = useState(false);
  const serviceDropdownRef = useRef(null);

  // Country/Region: controlled from parent when props provided, else internal
  const [countryInternal, setCountryInternal] = useState('');
  const [regionInternal, setRegionInternal] = useState('');
  const country = countryProp !== undefined ? countryProp : countryInternal;
  const region = regionProp !== undefined ? regionProp : regionInternal;

  const [countryOpen, setCountryOpen] = useState(false);
  const [countryUpward, setCountryUpward] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryDropdownRef = useRef(null);

  const [regionOpen, setRegionOpen] = useState(false);
  const [regionUpward, setRegionUpward] = useState(false);
  const [regionSearch, setRegionSearch] = useState('');
  const regionDropdownRef = useRef(null);

  const [serviceSearch, setServiceSearch] = useState('');

  // Countries/regions: from props or internal
  const countryListInternal = React.useMemo(() => parseCountryList(), []);
  const regionListInternal = React.useMemo(() => parseRegionList(country), [country]);
  const countryList = Array.isArray(countryListProp) ? countryListProp : countryListInternal;
  const regionList = Array.isArray(regionListProp) ? regionListProp : regionListInternal;

  // Filtered for search
  const filteredServices = serviceSearch
    ? servicesOptions.filter(s => s.toLowerCase().includes(serviceSearch.toLowerCase()))
    : servicesOptions;
  const filteredCountries = countrySearch
    ? countryList.filter(c => c && c.toLowerCase().includes(countrySearch.toLowerCase()))
    : countryList;
  const filteredRegions = regionSearch
    ? regionList.filter(r => r && r.toLowerCase().includes(regionSearch.toLowerCase()))
    : regionList;

  // Open/close dropdown helpers
  const handleServiceOpen = () => {
    if (serviceDropdownRef.current) {
      const rect = serviceDropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = DROPDOWN_MAX_VISIBLE * 43 + 14;
      setServiceUpward(spaceBelow < dropdownHeight + 30);
    }
    setServiceOpen(open => !open);
  };
  const handleCountryOpen = () => {
    if (countryDropdownRef.current) {
      const rect = countryDropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = DROPDOWN_MAX_VISIBLE * 43 + 14;
      setCountryUpward(spaceBelow < dropdownHeight + 30);
    }
    setCountryOpen(open => !open);
  };
  const handleRegionOpen = () => {
    if (regionDropdownRef.current) {
      const rect = regionDropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = DROPDOWN_MAX_VISIBLE * 43 + 14;
      setRegionUpward(spaceBelow < dropdownHeight + 30);
    }
    setRegionOpen(open => !open);
  };

  // Select handlers
  const handleServiceSelect = (val) => {
    if (onServiceChange) onServiceChange(val);
    else if (onChange) onChange(val);
    setServiceOpen(false);
    setServiceSearch('');
  };
  const handleCountrySelect = (val) => {
    if (onCountryChange) onCountryChange(val);
    else setCountryInternal(val);
    setCountryOpen(false);
    setCountrySearch('');
    if (onRegionChange) onRegionChange('');
    else setRegionInternal('');
  };
  const handleRegionSelect = (val) => {
    if (onRegionChange) onRegionChange(val);
    else setRegionInternal(val);
    setRegionOpen(false);
    setRegionSearch('');
  };

  // Click outside closes
  useEffect(() => {
    function handleClickOutside(e) {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
      if (regionDropdownRef.current && !regionDropdownRef.current.contains(e.target)) {
        setRegionOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <ThemeWrapper>
      {showServicePhone && (
      <ResponsiveFormRow>
        {/* Service select */}
        <FormCol>
          <SectionLabel>Our Services</SectionLabel>
          <DropdownWrapper ref={serviceDropdownRef}>
            <div className="theme-dropdown-btn" onClick={handleServiceOpen}>
              <span>{(service !== undefined ? service : value) || 'Select a Service'}</span>
              <svg
                viewBox="0 0 360 360"
                xmlSpace="preserve"
                style={{
                  transform: serviceOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                  transition: 'all 0.3s ease',
                }}
              >
                <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
              </svg>
            </div>
            {serviceOpen && (
              <div
                className={`theme-dropdown-menu ${serviceUpward ? 'up' : 'down'}`}
                style={{
                  maxHeight: `${DROPDOWN_MAX_VISIBLE * 43 + 14}px`,
                  overflowY: filteredServices.length > DROPDOWN_MAX_VISIBLE ? 'auto' : 'visible'
                }}
              >
                <input
                  type="text"
                  className="dropdown-search-field"
                  placeholder="Search service..."
                  value={serviceSearch}
                  onChange={e => setServiceSearch(e.target.value)}
                  autoFocus
                />
                {filteredServices.length === 0 && (
                  <div className="dropdown-option" style={{ opacity: 0.85 }}>
                    No service found.
                  </div>
                )}
                {filteredServices.map(item => (
                  <div
                    key={item}
                    className={`dropdown-option ${item === (service !== undefined ? service : value) ? 'selected' : ''}`}
                    onClick={() => handleServiceSelect(item)}
                  >{item}</div>
                ))}
              </div>
            )}
          </DropdownWrapper>
        </FormCol>
        {/* Phone input (simple) */}
        <FormCol>
          <SectionLabel>Phone Number*</SectionLabel>
          <StyledPhoneInput
            country={'pk'}
            value={phoneNumber}
            onChange={phone => typeof onPhoneNumberChange === 'function' && onPhoneNumberChange(phone)}
            enableSearch={true}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
              autoComplete: 'off',
              placeholder: 'Enter your phone number'
            }}
          />
        </FormCol>
      </ResponsiveFormRow>
      )}
      {showCountryRegion && (
      <ResponsiveFormRow style={showServicePhone ? { marginTop: 0 } : undefined}>
        <FormCol>
          <SectionLabel>Country</SectionLabel>
          <DropdownWrapper ref={countryDropdownRef}>
            <div className="theme-dropdown-btn" onClick={handleCountryOpen}>
              <span>{country || 'Select a Country'}</span>
              <svg
                viewBox="0 0 360 360"
                xmlSpace="preserve"
                style={{
                  transform: countryOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                  transition: 'all 0.3s ease',
                }}
              >
                <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
              </svg>
            </div>
            {countryOpen && (
              <div
                className={`theme-dropdown-menu ${countryUpward ? 'up' : 'down'}`}
                style={{
                  maxHeight: `${DROPDOWN_MAX_VISIBLE * 43 + 14}px`,
                  overflowY: filteredCountries.length > DROPDOWN_MAX_VISIBLE ? 'auto' : 'visible'
                }}
              >
                <input
                  type="text"
                  className="dropdown-search-field"
                  placeholder="Search country..."
                  value={countrySearch}
                  onChange={e => setCountrySearch(e.target.value)}
                  autoFocus
                />
                {filteredCountries.length === 0 && (
                  <div className="dropdown-option" style={{ opacity: 0.85 }}>
                    No country found.
                  </div>
                )}
                {filteredCountries.map(c => (
                  <div
                    key={c}
                    className={`dropdown-option ${c === country ? 'selected' : ''}`}
                    onClick={() => handleCountrySelect(c)}
                  >{c}</div>
                ))}
              </div>
            )}
          </DropdownWrapper>
        </FormCol>
        <FormCol>
          <SectionLabel>Region</SectionLabel>
          <DropdownWrapper ref={regionDropdownRef}>
            <div
              className="theme-dropdown-btn"
              style={{ opacity: country ? 1 : 0.6, pointerEvents: country ? 'auto' : 'none' }}
              onClick={country ? handleRegionOpen : undefined}
            >
              <span>{region || (country ? 'Select a Region' : 'Select Country First')}</span>
              <svg
                viewBox="0 0 360 360"
                xmlSpace="preserve"
                style={{
                  transform: regionOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                  transition: 'all 0.3s ease',
                }}
              >
                <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
              </svg>
            </div>
            {regionOpen && country && (
              <div
                className={`theme-dropdown-menu ${regionUpward ? 'up' : 'down'}`}
                style={{
                  maxHeight: `${DROPDOWN_MAX_VISIBLE * 43 + 14}px`,
                  overflowY: filteredRegions.length > DROPDOWN_MAX_VISIBLE ? 'auto' : 'visible'
                }}
              >
                <input
                  type="text"
                  className="dropdown-search-field"
                  placeholder="Search region..."
                  value={regionSearch}
                  onChange={e => setRegionSearch(e.target.value)}
                  autoFocus
                />
                {filteredRegions.length === 0 ? (
                  <div className="dropdown-option" style={{ opacity: 0.85 }}>
                    No regions found.
                  </div>
                ) : (
                  filteredRegions.map((r, idx) => (
                    <div
                      key={r}
                      className={`dropdown-option ${r === region ? 'selected' : ''}`}
                      onClick={() => handleRegionSelect(r)}
                    >{r}</div>
                  ))
                )}
              </div>
            )}
          </DropdownWrapper>
        </FormCol>
      </ResponsiveFormRow>
      )}
    </ThemeWrapper>
  );
};

export default CustomDropdown;