// import React, { useState } from 'react';
// import './Days.css';

// const Days = () => {
//   const [activeToday, setActiveToday] = useState(false);
//   const [activeTomorrow, setActiveTomorrow] = useState(false);

//   const handleTodayClick = () => {
//     setActiveToday(!activeToday);
//   };

//   const handleTomorrowClick = () => {
//     setActiveTomorrow(!activeTomorrow);
//   };

//   return (
//     <div className="days">
//       <button onClick={handleTodayClick} style={{ color: activeToday ? 'rgba(79, 255, 50, 1)' : 'white' }}>
//         TODAY
//       </button>
//       <button onClick={handleTomorrowClick} style={{ color: activeTomorrow ? 'rgba(79, 255, 50, 1)' : 'white' }}>
//         TOMORROW
//       </button>
//     </div>
//   );
// };

// export default Days;

import React, { useState } from 'react';
import './Days.css';

const Days = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null);
    } else {
      setActiveButton(button);
    }
  };

  return (
    <div className="days">
      <button
        onClick={() => handleButtonClick('TODAY')}
        style={{
          color: activeButton === 'TODAY' ? 'rgba(79, 255, 50, 1)' : 'white'
        }}
      >
        TODAY
      </button>
      <button
        onClick={() => handleButtonClick('TOMORROW')}
        style={{
          color: activeButton === 'TOMORROW' ? 'rgba(79, 255, 50, 1)' : 'white',
        }}
      >
        TOMORROW
      </button>
    </div>
  );
};

export default Days;

