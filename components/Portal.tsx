import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalI {
  children: ReactNode;
  elementId: string;
}

const Portal = ({ children, elementId }: PortalI) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById(elementId));
  }, [elementId]);

  if (rootElement) {
    return createPortal(children, rootElement);
  }
  return null;
};

export default Portal;
