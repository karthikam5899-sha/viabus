export const buses = [
  { id: 1, name: 'GreenLine Express', type: 'AC Sleeper (2+1)', departure: '21:30', arrival: '05:45', duration: '8h 15m', price: 899, seats: 18, rating: 4.8, amenities: ['Wi-Fi', 'Charging point', 'Blanket', 'Water bottle'], tag: 'Best rated', color: 'from-teal-500 to-emerald-700' },
  { id: 2, name: 'Royal Travels', type: 'Volvo Multi-Axle AC Seater', departure: '22:15', arrival: '06:30', duration: '8h 15m', price: 1099, seats: 12, rating: 4.7, amenities: ['Wi-Fi', 'Charging point', 'Live tracking'], tag: 'Popular', color: 'from-indigo-500 to-blue-700' },
  { id: 3, name: 'Sunrise Roadlines', type: 'AC Sleeper (2+1)', departure: '20:45', arrival: '06:00', duration: '9h 15m', price: 749, seats: 21, rating: 4.5, amenities: ['Blanket', 'Water bottle', 'Reading light'], tag: 'Lowest fare', color: 'from-orange-400 to-rose-600' },
  { id: 4, name: 'Coastal Cruiser', type: 'AC Semi-Sleeper', departure: '23:00', arrival: '07:10', duration: '8h 10m', price: 829, seats: 9, rating: 4.6, amenities: ['Charging point', 'Water bottle', 'GPS tracking'], tag: 'Fastest', color: 'from-cyan-500 to-sky-700' }
]
export const cities = ['Chennai', 'Bengaluru', 'Coimbatore', 'Madurai', 'Hyderabad', 'Kochi', 'Tiruchirappalli', 'Salem', 'Puducherry', 'Mumbai']
export const money = n => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
