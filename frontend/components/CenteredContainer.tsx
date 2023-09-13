import React, { ReactNode } from 'react';

interface CenteredContainerProps {
  children: ReactNode;
}

const CenteredContainer = ({ children } : CenteredContainerProps) => {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh' 
      }}>
        {children}
      </div>
  )
}

export default CenteredContainer;