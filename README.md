# ViaBus — Bus Ticket Booking Website

A responsive frontend demo built with React, Vite, Tailwind CSS, React Router (available for future route expansion), and Lucide icons. The current UI uses local React state to demonstrate the end-to-end flow.

## Features

- Responsive landing page, popular destinations, and route search
- From/to city selection, swap locations, and journey date validation
- Bus listing with departure/arrival times, duration, type, rating, seats remaining, amenities, fare, sorting, and sleeper filter
- Bus details and interactive seat selection (up to six seats)
- Passenger form with name, email, and Indian mobile-number validation
- Booking fare summary and confirmation ticket with booking ID
- Login/sign-up UI with client-side validation
- Responsive mobile navigation, hover effects, icons, and small page animations

> **Demo limitation:** This is frontend-only. It does not connect to a bus operator, database, authentication provider, payment gateway, or real seat inventory. Bus information and booking confirmation are sample data. Do not use the confirmation as a real ticket.

### Demo sign-in

- Email: `demo@viabus.com`
- Password: `ViaBus123!`

These credentials work only in the local frontend demo and do not authenticate against a server.

## Requirements

- Node.js 18 or newer (Node.js 20+ recommended)
- npm

## Run locally

1. Extract the ZIP and open a terminal in the `bus-ticket-booking` folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

5. Create a production build when ready:

   ```bash
   npm run build
   npm run preview
   ```

## Folder structure

```text
bus-ticket-booking/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── public/
│   └── ViaBus.png                # Brand logo and favicon
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # Page flow and shared booking state
    ├── index.css                # Tailwind directives and global styles
    ├── data.js                  # Sample cities, bus data, and currency helper
    └── components/
        ├── Header.jsx           # Responsive navigation
        ├── Footer.jsx           # Footer links and branding
        ├── SearchForm.jsx       # Route/date search form
        ├── BusCard.jsx          # Bus result card
        └── SeatSelector.jsx     # Interactive seat map
```

## Main user flow

`Home → Search buses → Choose bus/seats → Passenger details → Booking confirmation`

The header also links to the login/sign-up UI. Page navigation is implemented as local state so the demo can run without a backend or route server configuration.

## Customization

- Edit `src/data.js` to change the demo cities, bus operators, fares, timings, amenities, and ratings.
- Edit `src/components/SearchForm.jsx` to change the city selector or journey search fields.
- Edit `src/components/SeatSelector.jsx` to update the seat layout or unavailable seats.
- To make this production-ready, connect an API/database for live routes and seat inventory, implement real authentication, and integrate a payment provider with server-side booking validation.
