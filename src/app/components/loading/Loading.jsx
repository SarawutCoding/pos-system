import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
      <span className="ml-2 text-green-800 font-medium">กำลังโหลด...</span>
    </div>
  );
};

export default Loading;