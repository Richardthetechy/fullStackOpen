# README.md

# Weather App

This project is a React application that fetches and displays weather information for a specified city using the OpenWeather API. It also provides information about countries, including their name, capital, area, languages, and flag.

## Features

- Fetch and display weather data for a specified city.
- Display country information including name, capital, area, languages, and flag.

## Project Structure

```
weather-app
├── src
│   ├── components
│   │   ├── Weather.jsx
│   │   └── Country.jsx
│   ├── services
│   │   └── weather.js
│   ├── utils
│   │   └── config.js
│   ├── App.jsx
│   └── index.jsx
├── .env
├── package.json
├── README.md
└── vite.config.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to view the application.
- Enter a city name to fetch and display the weather information.

## License

This project is licensed under the MIT License.