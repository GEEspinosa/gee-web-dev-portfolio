"use client"
import React from "react";
// import { useDirectoryToggle } from "@/context/DirectoryToggleContext";

interface PreWinterBeastAlbumProps {
  album: {
    artist: string;
    name: string;
    year: string;
    rlabel?: string;
    locations: string [],
    albumArtUrl?: string;
    yourCredits?: string; // e.g., Producer, Engineer
    links?: { label: string; url: string }[];
    photos?: string[]; // URLs of photos you want to show
    notes?: string; // any extra info or anecdotes
  };
}

export default function PreWinterBeastAlbumView({ album }: PreWinterBeastAlbumProps) {
    // const {highlightColor} = useDirectoryToggle()
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md space-y-6">
      {/* Album Header */}
      <header className="flex items-center space-x-6">
        {album.albumArtUrl && (
          <img
            src={album.albumArtUrl}
            alt={`${album.artist} - ${album.name} album art`}
            className="w-40 h-40 object-cover rounded"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{album.name}</h1>
          <p className="text-xl text-gray-700">{album.artist}</p>
          <p className="text-md text-gray-500">{album.year}</p>
          {album.yourCredits && (
            <p className="mt-2 italic text-gray-600">Credits: {album.yourCredits}</p>
          )}
        </div>
      </header>

      {/* Links Section */}
      {album.links && album.links.length > 0 && (
       <section>
    <h2 className="font-semibold text-lg mb-2">Links</h2>

    <ul className="space-y-1">
      {album.links.map(({ label, url }) => (
        <li key={url}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </section>
      )}

      {/* Photos Gallery */}
      {/* {album.photos && album.photos.length > 0 && (
        <section>
          <h2 className="font-semibold text-lg mb-2">Photos</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {album.photos.map((src, i) => (
              <image
                key={i}
                src={src}
                alt={`${album.name} photo ${i + 1}`}
                className="h-32 rounded object-cover flex-shrink-0"
              />
            ))}
          </div>
        </section>
      )} */}

      {/* Notes or Anecdotes */}
      {album.notes && (
        <section>
          <h2 className="font-semibold text-lg mb-2">Notes</h2>
          <p className="whitespace-pre-wrap text-gray-700">{album.notes}</p>
        </section>
      )}
    </div>
  );
}