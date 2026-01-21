# 💱 Currency Converter

A simple and responsive currency converter web application built with HTML, CSS, and Vanilla JavaScript.

This project allows users to convert values from Brazilian Real (BRL) to other currencies such as US Dollar (USD), Euro (EUR), and Pound Sterling (GBP) using **real-time exchange rates from AwesomeAPI**.

---

## 🎨 User Interface

The UI was styled using pure CSS with:

- Custom colors

- Rounded containers

- Centralized layout

- Mobile-friendly width (375px)

The design focuses on clarity, simplicity, and usability.

---

## 🚀 Features

- ✅ Convert BRL to USD, EUR and GBP

- ✅ Real-time exchange rates via API

- ✅ Display of last update date/time

- ✅ Clean and modern UI

- ✅ Fully responsive layout

- ✅ Currency formatting using Intl.NumberFormat

- ✅ Runs entirely in the browser (no backend)

---

## 📡 API Used

Exchange rates are fetched in real-time from [AwesomeAPI](https://docs.awesomeapi.com.br/):
https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL


---

## 📁 Project Structure

currency-converter/ │ ├── assets/ │ └── images and icons │ ├── index.html ├── style.css └── scripts.js


---

## ⚙️ How It Works

1. Enter an amount in Brazilian Real (BRL).

2. Select the target currency from the dropdown.

3. Click the **Convert** button.

4. The converted value is displayed with proper currency formatting.

The conversion logic is handled with JavaScript using real-time data from the API and formatted using internationalization standards.

---

## 🛠️ Technologies Used

- **HTML5** – structure

- **CSS3** – layout and styling

- **JavaScript (ES6+)** – logic and DOM manipulation

- **Fetch API** – HTTP requests

- **Async/Await** – asynchronous programming

- **Intl.NumberFormat API** – currency formatting

- **[AwesomeAPI](https://docs.awesomeapi.com.br/)** – real-time exchange rates

---

## ▶️ Running the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/LehiSaid/currency-converter.git
Open the project folder:
bashCopiar
cd currency-converter
Open index.html in your browser.
📚 What I Learned
Through this project, I practiced:

DOM manipulation with JavaScript

Handling user input and events

Consuming external APIs with fetch

Asynchronous programming with async/await

Error handling with try/catch

Applying clean CSS layouts and flexbox

Formatting currencies based on locale

Structuring a front-end project

🧠 Future Improvements
~~Fetch real-time exchange rates from an API~~ ✅ Done!

Add more currency options

Add reverse conversion (USD/EUR/GBP to BRL)

Improve accessibility (ARIA labels)

Add animations and transitions

Deploy using GitHub Pages

👤 Author
Lehi Said
Front-end developer in training
GitHub: github.com/LehiSaid

📄 License
This project is open-source and intended for learning and portfolio purposes.

