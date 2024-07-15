
import { useState } from 'react';
import Signup from './Signup';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && <Signup onClose={handleCloseModal} />}
    </div>
  );
};

export default App;