"use client";

import { useState } from "react";

export default function Slice() {
  const [lookingFor, setLookingFor] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("2 Bed rooms");

  const filters = ["City", "House", "Residential", "Apartment"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Search for properties with:\nLooking for: ${lookingFor}\nPrice: ${price}\nLocation: ${location}\nRooms: ${rooms}`
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600&display=swap');

        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Urbanist', sans-serif;
          color: white;
        }
        .background {
          position: relative;
          width: 100vw;
          height: 100vh;
          background-image: url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e7b52ec-0803-41f7-9dc5-a823b734b064.png');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 80px 60px 80px;
          min-height: 100vh;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 0;
          border-radius: 0 0 20px 20px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
          position: relative;
        }
        .branding {
          font-weight: 700;
          font-size: 24px;
          user-select: none;
          color: #d1f3d1;
          letter-spacing: 1.2px;
        }
        nav {
          display: flex;
          gap: 20px;
          background: rgba(255 255 255 / 0.15);
          border-radius: 30px;
          padding: 6px 12px;
          backdrop-filter: saturate(180%) blur(12px);
        }
        nav a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 6px 18px;
          border-radius: 30px;
          transition: background-color 0.25s ease;
          user-select: none;
          font-size: 16px;
        }
        nav a.active,
        nav a:hover {
          background-color: #e6f7d7;
          color: #4a7e32;
        }
        .right-menu {
          display: flex;
          align-items: center;
          gap: 24px;
          color: white;
          font-weight: 600;
          user-select: none;
          position: relative;
          z-index: 1;
        }
        .language-select {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        .language-select svg {
          width: 16px;
          height: 16px;
          fill: white;
        }
        button.signup {
          background-color: #a8d84e;
          border: none;
          color: #23320b;
          font-weight: 700;
          padding: 8px 26px;
          border-radius: 40px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        button.signup:hover {
          background-color: #85b230;
          color: #e6f7d7;
        }

        .tags {
          display: flex;
          gap: 10px;
          margin-top: 48px;
          user-select: none;
          z-index: 1;
          position: relative;
        }
        .tag {
          background: rgba(255 255 255 / 0.15);
          padding: 8px 22px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          user-select: none;
          color: white;
          transition: background 0.3s ease;
          white-space: nowrap;
        }
        .tag:hover,
        .tag.active {
          background-color: #a8d84e;
          color: #23320b;
        }

        main h1 {
          font-weight: 600;
          font-size: 3.25rem;
          line-height: 1.1;
          margin: 18px 0 0 0;
          max-width: 740px;
          z-index: 1;
          position: relative;
          user-select: none;
        }
        .sub-text {
          max-width: 340px;
          font-weight: 400;
          font-size: 14px;
          margin-top: 30px;
          line-height: 1.7;
          opacity: 0.8;
          user-select: none;
          z-index: 1;
          position: relative;
        }

        .search-container {
          background-color: white;
          border-radius: 24px;
          padding: 24px 40px;
          box-shadow: 0 6px 14px rgb(0 0 0 / 0.2);
          max-width: 100%;
          width: 100%;
          margin-top: 48px;
          color: #111;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          z-index: 1;
          position: relative;
          font-family: 'Urbanist', sans-serif;
        }
        .search-container h2 {
          width: 100%;
          margin: 0 0 12px 0;
          color: #222;
          font-weight: 700;
          font-size: 1.5rem;
          user-select: none;
        }

        form {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          flex: 1;
          min-width: 280px;
        }

        label {
          font-weight: 600;
          font-size: 14px;
          display: block;
          margin-bottom: 6px;
          color: #333;
          user-select: none;
        }
        input[type="text"],
        select {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1.6px solid #ddd;
          outline-offset: 2px;
          min-width: 180px;
          font-size: 14px;
          font-family: 'Urbanist', sans-serif;
          transition: border-color 0.3s ease;
          color: #444;
        }
        input[type="text"]:focus,
        select:focus {
          border-color: #a8d84e;
        }

        .filter-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 12px;
          user-select: none;
          width: 100%;
        }
        .filter-wrapper span {
          font-weight: 600;
          color: #444;
          font-size: 14px;
          user-select: none;
        }
        .filter-tag {
          border-radius: 40px;
          padding: 6px 18px;
          font-weight: 600;
          font-size: 13px;
          background: #f0f0f0;
          color: #666;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
          white-space: nowrap;
        }
        .filter-tag:hover,
        .filter-tag.active {
          background-color: #a8d84e;
          color: #23320b;
        }

        button.search-btn {
          background-color: black;
          color: white;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          min-width: 160px;
          align-self: flex-end;
          justify-self: flex-end;
          transition: background-color 0.3s ease;
        }
        button.search-btn:hover {
          background-color: #333;
        }

        @media (max-width: 920px) {
          .background {
            padding: 24px 32px 48px 32px;
          }
          nav {
            gap: 12px;
          }
          nav a {
            font-size: 14px;
            padding: 6px 14px;
          }
          main h1 {
            font-size: 2.25rem;
          }
          .search-container {
            padding: 20px 24px;
          }
          label, input[type="text"], select {
            font-size: 13px;
          }
          form {
            gap: 14px;
          }
          button.search-btn {
            min-width: 100%;
          }
        }
      `}</style>

      <div className="background" role="main">
        <div className="overlay" aria-hidden="true"></div>

        <header>
          <div className="branding" aria-label="Brand name EverGreen">
            EverGreen
          </div>
          <nav aria-label="Primary navigation">
            <a href="#" className="active" aria-current="page">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">Property List</a>
            <a href="#">Contact Us</a>
          </nav>
          <div className="right-menu">
            <div
              className="language-select"
              tabIndex={0}
              aria-label="Select language"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                  10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.5-.63-4.79-1.69l10.1-10.1A7.045 7.045 0 0112 20zm6.79-3.31l-10.1 10.1A7.044 7.044 0 0112 4c1.85 0 3.5.63 4.79 1.69l-10.1 10.1z"
                />
              </svg>
              <span>Eng</span>
            </div>
            <button
              className="signup"
              type="button"
              aria-label="Sign Up for an account"
            >
              Sign Up
            </button>
          </div>
        </header>

        <section aria-label="Property categories" className="tags">
          <button type="button" className="tag active" aria-pressed="true">
            House
          </button>
          <button type="button" className="tag" aria-pressed="false">
            Apartment
          </button>
          <button type="button" className="tag" aria-pressed="false">
            Residential
          </button>
        </section>

        <main>
          <h1 tabIndex={-1}>Build Your Future, One Property at a Time.</h1>
          <p className="sub-text" aria-label="Property ownership tagline">
            Own Your World. One Property at a Time. Own Your World. One Property
            at a Time. Own Your World. One Property at a Time. Own Your World.
            One Property at a Time.
          </p>

          <section aria-labelledby="search-properties">
            <div
              className="search-container"
              role="form"
              aria-describedby="search-desc"
            >
              <h2 id="search-properties">Find the best place</h2>
              <p
                id="search-desc"
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#444",
                  marginTop: "4px",
                  marginBottom: "16px",
                }}
              >
                Search properties matching your criteria
              </p>
              <form onSubmit={handleSearch} noValidate>
                <div>
                  <label htmlFor="looking-for">Looking for</label>
                  <input
                    type="text"
                    id="looking-for"
                    name="looking-for"
                    placeholder="Enter type"
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    aria-describedby="looking-for-desc"
                  />
                </div>

                <div>
                  <label htmlFor="price">Price</label>
                  <select
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option value="">Price</option>
                    <option value="below-500k">Below $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="above-2m">Above $2M</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location">Locations</label>
                  <select
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Location</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="miami">Miami</option>
                    <option value="san-francisco">San Francisco</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="rooms">Number of rooms</label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                  >
                    <option value="1 Bed room">1 Bed room</option>
                    <option value="2 Bed rooms">2 Bed rooms</option>
                    <option value="3 Bed rooms">3 Bed rooms</option>
                    <option value="4+ Bed rooms">4+ Bed rooms</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="search-btn"
                  aria-label="Search Properties"
                >
                  Search Properties
                </button>
              </form>

              <div
                className="filter-wrapper"
                aria-label="Property type filters"
                role="group"
              >
                <span>Filter:</span>
                {filters.map((filter, i) => (
                  <button
                    key={i}
                    type="button"
                    className="filter-tag"
                    aria-pressed="false"
                    onClick={() => alert(`Filter by ${filter}`)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
