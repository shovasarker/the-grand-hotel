const { createContext, useState } = require('react')

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
