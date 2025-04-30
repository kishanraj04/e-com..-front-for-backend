import { createContext, useEffect, useState } from "react";

export const GlobalContect = createContext();

export const GlobalProvider = ({ children }) => {
  const [editFlag, setEditFlag] = useState('');
  const [addNewAddressFlag, setAddNewAddressFlag] = useState(false);
  const [isDeliverHere, setIsDeliverHere] = useState(false);
  const [deliverHereFlag, setIsDeliverHereFlag] = useState(false);
  const [allCartDataForOrderSummary, setAllCartDataForOrderSummary] = useState([]);
  const [itemQtyForOrderSummary, setItemQtyForOrderSummary] = useState({});

  useEffect(() => {
    
    const updatedCart = allCartDataForOrderSummary.map(product => {
      const qty = itemQtyForOrderSummary[product?._id];
      return qty ? { ...product, qtyForOrderSummary: qty } : product;
    });

    setAllCartDataForOrderSummary(updatedCart);
  }, [itemQtyForOrderSummary]);

  return (
    <GlobalContect.Provider
      value={{
        editFlag,
        setEditFlag,
        isDeliverHere,
        setIsDeliverHere,
        addNewAddressFlag,
        setAddNewAddressFlag,
        deliverHereFlag,
        setIsDeliverHereFlag,
        allCartDataForOrderSummary,
        setAllCartDataForOrderSummary,
        itemQtyForOrderSummary,
        setItemQtyForOrderSummary,
      }}
    >
      {children}
    </GlobalContect.Provider>
  );
};
