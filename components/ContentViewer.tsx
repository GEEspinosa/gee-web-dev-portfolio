import GitHubRepoView from "./GitHubRepoView";
import READMEView from "./READMEView";
import LiveDemoView from "./LiveDemoView";
import PreWinterBeastAlbumView from "./PreWinterBeastAlbumView";
import WinterBeastAlbumView from "./WinterBeastAlbumView";
import { preWinterBeastAlbumsData } from "@/lib/albumData/preWinterBeastAlbumData";
import { winterBeastAlbumsData } from "@/lib/albumData/winterBeastAlbumData";
import { useDirectoryToggle } from "../context/DirectoryToggleContext";



export default function ContentViewer() {
  const { selectedNode } = useDirectoryToggle();

  if (!selectedNode || selectedNode.type === "folder") {
    return <div>Please selected a file for viewing.</div>;
  }

  switch (selectedNode.fileType) {
    case "github-repo":
      return <GitHubRepoView repoURL={selectedNode.url!} />;
    case "readme":
      return <READMEView content={selectedNode.content ?? ""} />;
    case "live-demo":
      return <LiveDemoView demoURL={selectedNode.url!} />;
    case "pre-wb-album": {
      const album = preWinterBeastAlbumsData.find(
        (a) => a.selectName === selectedNode.name
      );

      if (!album) {
        return <div>Album data not found.</div>;
      }
      return <PreWinterBeastAlbumView album={album} />;
    }
    case "wb-album": {
      const album = winterBeastAlbumsData.find(
        (a) => a.selectName === selectedNode.name
      );

      if (!album) {
        return <div>Album data not found.</div>;
      }
      return <WinterBeastAlbumView album={album} />;
    }
  }
}
