import GitHubRepoView from "./GitHubRepoView";
import READMEView from "./READMEView";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";


export default function ContentViewer() {

    const {selectedNode} = useDirectoryToggle()
    
  if (!selectedNode || selectedNode.type === "folder") {
    return <div>Please selected a file for viewing.</div>;
  }

  switch (selectedNode.fileType) {
    case "github-repo": return <GitHubRepoView/>
    case "readme": return <READMEView content={selectedNode.content ?? ""}/>
  }
}


//within code block
//1) safety check if selected node isn't anything or if its type is a folder
// then return a string to render instructions to user

//2) create a switch from all fileType values
// each case will start with name as a string : return a component with the selectedNode sent to it in props
