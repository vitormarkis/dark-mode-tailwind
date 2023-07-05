import React, {
  CSSProperties,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface HeaderHeightContextInterface {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

export const HeaderHeightContext = createContext(
  {} as HeaderHeightContextInterface
);

export function HeaderHeightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useState(0);

  const value: HeaderHeightContextInterface = {
    headerHeight,
    setHeaderHeight,
  };

  return (
    <HeaderHeightContext.Provider value={value}>
      <div style={{ "--headerHeight": `${headerHeight}px` } as CSSProperties}>
        {children}
      </div>
    </HeaderHeightContext.Provider>
  );
}

export const useHeaderHeight = () => useContext(HeaderHeightContext);
