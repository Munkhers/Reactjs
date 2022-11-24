import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const currentTime = new Date();
      setDate(`${currentTime.toDateString()} ${currentTime.toTimeString()}`)
    }, 1000)
  }, [date])

  return <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            }}>{date}
         </div>;
};

export default LiveClock;