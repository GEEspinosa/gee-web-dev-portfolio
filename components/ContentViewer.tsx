import GitHubRepoView from "./GitHubRepoView";
import READMEView from "./READMEView";
import LiveDemoView from "./LiveDemoView";
import PreWinterBeastAlbumView from "./PreWinterBeastAlbumView";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";

const preWinterBeastAlbums = [
  {
    artist: "Night Surgeon",
    selectName: "Night Surgeon: Gondola Crimewave (2014)",
    name: "Gondola Crimewave",
    year: "2014",
    albumArtUrl: "/images/album-art/gondola-crime-wave.jpg",
    yourCredits: "...",
   
  },
];

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
      const album = preWinterBeastAlbums.find(
        (a) => a.selectName === selectedNode.name
      );

      if (!album) {
        return <div>Album data not found.</div>;
      }
      return <PreWinterBeastAlbumView album={album} />;
    }
  }
}
