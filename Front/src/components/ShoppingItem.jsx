import { useState } from 'react';
import PropTypes from 'prop-types';

const ShoppingItem = ({ name, quantity, onRemove }) => {
  const [isDone, setIsDone] = useState(false);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <div
      className={`flex items-center justify-between p-2 border rounded mb-2 ${
        isDone ? 'bg-green-100 line-through' : ''
      }`}
    >
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={toggleDone}
          className={`px-2 py-1 rounded ${
            isDone ? 'bg-gray-400 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          {isDone ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={onRemove}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

ShoppingItem.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  quantity: PropTypes.number.isRequired, // 'quantity' must be a number and is required
  onRemove: PropTypes.func.isRequired, // 'onRemove' must be a function and is required
};

export default ShoppingItem;
