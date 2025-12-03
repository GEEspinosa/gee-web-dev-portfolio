import { createContext, useContext } from "react";
import { TreeNodeProps } from "@/components/TreeNode";

interface DirectoryToggleContextTypes {
  colorToggle: boolean;
  setColorToggle: React.Dispatch<React.SetStateAction<boolean>> ;
 
  highlightColor: string;
  setHighlightColor: React.Dispatch<React.SetStateAction<string>>;


  verticalToggle: boolean;
  setVerticalToggle: React.Dispatch<React.SetStateAction<boolean>>;

  horizontalToggle: boolean;
  setHorizontalToggle: React.Dispatch<React.SetStateAction<boolean>>;

  selectedNode: TreeNodeProps["node"] | null;
  setSelectedNode: React.Dispatch<React.SetStateAction<TreeNodeProps["node"] | null>>;
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
