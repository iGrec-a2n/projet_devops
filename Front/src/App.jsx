import { useState } from 'react';
import ShoppingItem from './components/ShoppingItem';
import AddItemForm from './components/AddItemForm';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apples', quantity: 3 },
    { id: 2, name: 'Bananas', quantity: 5 },
  ]);

  const addItem = ({ name, quantity }) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity,
    };
    setItems([...items, newItem]);
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
