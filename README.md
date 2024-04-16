# Weather App

This is a [Next.js](https://nextjs.org/) project build along with React and Redux to fully appreciate a small, yet complete and dynamic application to get current weather conditions and a 5-day forecast.

It has a built-in search functionality to look for cities and has the option to get your current location, so you might need to grant access in your browser.

## Information to run the project

This app uses [openweathermap](https://openweathermap.org/) to retrieve information about forecast and current weather. In order to use it you need to register to get an api key from their website [here](https://openweathermap.org/api).

Once you get your API key you need to store it in a `.env.local` file like this

```
API_KEY="your_api_key"
```

Once you set up your api key you can continue and build the server

```bash
yarn
# after run
yarn dev
```

Once the project is build you can go and open [http://localhost:3000](http://localhost:3000) with your browser to see the application running and enjoy its features.
