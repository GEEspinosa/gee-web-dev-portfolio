import { createContext, useContext} from "react";

//this will be exported by default for the provider/wrapper
const ColorToggleContext = createContext<boolean>(true);

//this will be what we import into our TreeNode component to use props
export const useColorToggle = () => useContext(ColorToggleContext);

export default ColorToggleContext;