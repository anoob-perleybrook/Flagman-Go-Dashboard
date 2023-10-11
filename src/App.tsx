import React from 'react';
import Left_Column from './components/Left_Column';
import Right_Column from './components/Right_Column';

const TwoColumnLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      {/* Left column */}

      <Left_Column />

      {/* Right column */}
      <div className="col-span-4 bg-white p-4">

        <Right_Column />

      </div>
    </div>
  );
};


export default TwoColumnLayout;
