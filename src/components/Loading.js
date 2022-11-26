import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      <LoadingBar style={{ backgroundColor: 'blue', height: '4px' }} />
    </div>
  );
}

export default Loading;
