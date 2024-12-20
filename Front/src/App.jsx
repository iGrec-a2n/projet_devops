import { useState, useEffect } from 'react';
import ShoppingItem from './components/ShoppingItem';
import AddItemForm from './components/AddItemForm';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({name: '', quantity: 1})

  useEffect(() => {
    fetch('http://localhost:4000/api/items')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur serveur ! status: ${res.status}`);
      }
      return res.json();
    }).then((data) => {
      setItems(data)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])
  

  const addItem = () => {
    fetch('http://localhost:4000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Informer le backend qu'on envoie du JSON
      },
      body: JSON.stringify(newItem), // Convertit l'objet en chaîne JSON
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert(data.message); // Message de confirmation
        setItems([...items, data.item]); // Ajoute le nouvel élément à la liste
        setNewItem({ name: '', quantity: 1 }); // Réinitialise le formulaire
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <AddItemForm onAddItem={addItem} />

      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          onRemove={() => removeItem(item.id)}
        />
      ))}
    </div>
  );
};

export default App;
