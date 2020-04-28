const pies = [
    {
      type: 'Apple',
      size: 'Family',
      crust: 'Lattice',
      price: 30,
      imageUrl: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17607-caramel-apple-pie-760x580.jpg?ext=.jpg',
      owner: 'luke',
      aLaMode: true
    },
    {
      type: 'Pecan',
      size: 'Personal',
      crust: 'Basic Flaky',
      price: 3,
      imageUrl: 'https://www.mydarlingvegan.com/wp-content/uploads/2012/11/PecanPie9.jpg',
      owner: 'pichael',
      aLaMode: false
    },
    {
      type: 'Blueberry',
      size: 'Regular',
      crust: 'Crumb',
      price: 400,
      imageUrl: 'https://i.pinimg.com/originals/36/f6/5d/36f65d03ccda6f3e5e1b982ad3bda9c8.png',
      owner: 'matt',
      aLaMode: true
    },
    {
      type: 'Meat Pie',
      size: 'Real Big',
      crust: 'Meat Crust',
      price: 1,
      imageUrl: 'https://culinaryginger.com/wp-content/uploads/Minced-Beef-and-Onion-Pies-10-480x480.jpg',
      owner: 'luke',
      aLaMode: true
    },
    {
      type: 'Pizza Pie',
      size: 'XL',
      crust: 'regular',
      price: 6,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      owner: 'pichael',
      aLaMode: true
    },
    {
      type: 'Rhubarb',
      size: 'Pie Sized',
      crust: 'Normal',
      price: 2147483647,
      imageUrl: 'https://assets.kraftfoods.com/recipe_images/opendeploy/54036_640x428.jpg',
      owner: 'matt',
      aLaMode: true
    },
    {
      type: 'Spanakopita',
      size: 'Pan',
      crust: 'Filo',
      price: 8,
      imageUrl: 'https://www.recipethis.com/wp-content/uploads/Leftover-Greek-Spanakopita-Pie-In-The-Air-Fryer.jpg',
      owner: 'everybody',
      aLaMode: false
    }
  ];
  
  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
  const buildPies = (pieCollection) => {
    let domString = '';
  
    for (let i = 0; i < pieCollection.length; i++) {
      domString += `
        <div class="pie">
          <h2>${pieCollection[i].type}</h2>
          <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
          <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i].crust} crust.</p>
          <h4>Price: ${pieCollection[i].price}</h4>
        </div>
      `;
    }
  
    printToDom('#pieContainer', domString);
  }

  const filterPiesEvent = (event) => {
      const buttonId = event.target.id;
      const tempPieCollection = [];

      for (let i = 0; i < pies.length; i++) {
          if (pies[i].owner === buttonId) {
              tempPieCollection.push(pies[i]);
          }
      }
      buildPies(tempPieCollection);
  } 
  
  const clickEvents = () => {
    document.querySelector('#luke').addEventListener('click', filterPiesEvent);
    document.querySelector('#pichael').addEventListener('click', filterPiesEvent);
    document.querySelector('#matt').addEventListener('click', filterPiesEvent);
  }

  const init = () => {
    buildPies(pies);
    clickEvents();
  }
  
  init();