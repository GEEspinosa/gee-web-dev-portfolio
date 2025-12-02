import GitHubRepoView from "./GitHubRepoView";
import READMEView from "./READMEView";
import LiveDemoView from "./LiveDemoView";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";


export default function ContentViewer() {

    const {selectedNode} = useDirectoryToggle()
    
  if (!selectedNode || selectedNode.type === "folder") {
    return <div>Please selected a file for viewing.</div>;
  }

  switch (selectedNode.fileType) {
    case "github-repo": return <GitHubRepoView repoURL={selectedNode.url!}/>
    case "readme": return <READMEView content={selectedNode.content ?? ""}/>
     case "live-demo": return <LiveDemoView demoURL={selectedNode.url!}/>
  }
}



