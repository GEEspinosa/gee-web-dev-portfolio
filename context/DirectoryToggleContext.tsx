import { createContext, useContext } from "react";

interface DirectoryToggleContextTypes {
  colorToggle: boolean;
  verticalToggle: boolean;
  horizontalToggle: boolean;
}

//this will be exported by default for the provider/wrapper
const DirectoryToggleContext = createContext<
  DirectoryToggleContextTypes | undefined
>(undefined);

//this will be what we import into our TreeNode component to use props
export const useDirectoryToggle = () => {
  const context = useContext(DirectoryToggleContext);
  if (context === undefined) {
    throw new Error(
      "useDirectoryToggle must be used within a DirectoryToggleContext.Provider"
    );
  }
  return context;
};

export default DirectoryToggleContext;
