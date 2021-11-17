import React from 'react';
import './App.css';
import Product from './Product';
import Tile from "./Tile";
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

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
          <Product
            label="Best seller"
            image={bag_1}
            name="The handy bag"
            price="€400,-"
          />
          <Product
              label="Best seller"
              image={bag_2}
              name="The stylish bag"
              price="€250,-"
          />
          <Product
              label="New collection"
              image={bag_3}
              name="The simple bag"
              price="€300,-"
          />
          <Product
              label="New collection"
              image={bag_4}
              name="The trendy bag"
              price="€150,-"
          />
        </main>
        <footer>
          <Tile
              title = "THE BRAND"
              text = "This is our brand"
          />
          <Tile
              image={brand}
          />
          <Tile
              image={our_story}
          />
          <Tile
              title = "OUR STORY"
              text = "This is our story"
          />
        </footer>
      </>
  );
}

export default App;



