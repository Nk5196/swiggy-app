import React from 'react';

const cardStyle = {
  width: '350px',
  height: '200px',
  marginLeft: '40px',
  backgroundColor: '#f0f0f0', // Optional: Set a background color for the cards
  borderRadius: '8px', // Optional: Add border-radius to create rounded corners for the cards
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow for a card-like appearance
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px', // Optional: Adjust font size for the content inside the cards
  fontWeight: 'bold', // Optional: Adjust font weight for the content inside the cards
  color: '#333', // Optional: Set text color for the content inside the cards
  marginRight: '20px', // Optional: Add spacing between the cards
};

function Shimmer() {
  return (
    <div className='shimmercarousel' style={{ display: 'flex' , marginBottom:'100px'}}>
      <div style={cardStyle}></div>
      <div style={cardStyle}></div>
      <div style={cardStyle}></div>
    </div>
  );
}

export default Shimmer;
