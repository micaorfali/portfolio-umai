import { useState, createContext } from 'react';

const FavContext = createContext();

const FavProvider = ({
  defaultValue = [{ name: 'Post', id: 10 }],
  children,
}) => {
  const [fav, setFav] = useState(defaultValue);

  return (
    <FavContext.Provider value={{ fav, setFav }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavProvider };