import React from 'react';
import './App.css';

// STAPPENPLAN OPDRACHT 1
// 1. nav-element maken
// 2. Wikkel de titel en nav in een fragment!
// 3. Schrijf één button element:
// [ ] Tekst
// [ ] Type (button)
// [ ] Hoe krijgen we een event-listener op een react button? Om daarna console.log() iets in de console
// [ ] Hoe krijgen we een button disabled?

// STAPPENPLAN OPDRACHT 2

// # Aanpak componenten maken
// 1. `components`-map maken
// 2. Bestandje maken met de naam van jouw component (`Testimonial.js`)
// 3. Functie schrijven (met hoofdletter) die een HTML-element returned
// 4. Exporteer de functie (component) uit het bestand
// 5. Importeer de functie (component) in App.js en gebruik hem als: `<Component />`
// 6. Plak je de orignele HTML in jouw custom component. Welke data heeft jouw component nodig?
// 7. Bedenk property-namen en geef informatie door aan het component vanaf `App.js`
// 8. Ontvang het props-object als parameter
// 9. Vervang de statische tekst door dynamische waardes uit het props object


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
        <button type="button"
                onClick={() => console.log("Hier is de collectie")}> To The Collection
        </button>
        <button type="button"
                onClick={() => console.log("Hier zijn alle tassen")}> Shop All Bags
        </button>
        <button disabled={true}>Pre Orders
        </button>
        </nav>
        <main>

        </main>
      </>
  );
}

export default App;



