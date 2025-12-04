import type { TreeNodeProps } from "@/components/TreeNode";
import { idIncrement } from "@/utils/id-increment";
import { photoWebsiteReadme } from "./siteREADMEs/photoWebsiteReadme";
import { attritionReadme } from "./siteREADMEs/attritionReadme";

export const treeData: TreeNodeProps["node"][] = [
  {
    id: idIncrement(),
    name: "Creative Technology",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Convolution Reverb Tool",
        type: "folder",
        children: [],
      },
      {
        id: idIncrement(),
        name: "Acoustic Research",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Impulse Response Library",
            type: "folder",
          },
        ],
      },
    ],
  },
  {
    id: idIncrement(),
    name: "Web Development",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Photo Website",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "GitHub Repo",
            type: "file",
            fileType: "github-repo",
            url: "https://api.github.com/repos/GEEspinosa/GEEspinosa-photo-portfolio",
          },
          {
            id: idIncrement(),
            name: "Live Demo",
            type: "file",
            fileType: "live-demo",
            url: "https://ge-espinosa-photo-portfolio.vercel.app",
          },
          {
            id: idIncrement(),
            name: "README.md",
            type: "file",
            fileType: "readme",
            content: photoWebsiteReadme,
          },
        ],
      },
      {
        id: idIncrement(),
        name: "War Card Game",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "GitHub Repo",
            type: "file",
            fileType: "github-repo",
            url: "https://api.github.com/repos/GEEspinosa/card-test-project",
          },
          {
            id: idIncrement(),
            name: "Live Demo",
            type: "file",
            fileType: "live-demo",
            url: "https://card-test-project.vercel.app",
          },
          {
            id: idIncrement(),
            name: "README.md",
            type: "file",
            fileType: "readme",
            content: attritionReadme,
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Developer Website",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "GitHub Repo",
            type: "file",
            fileType: "github-repo",
            url: "https://api.github.com/repos/GEEspinosa/gee-web-dev-portfolio",
          },
          {
            id: idIncrement(),
            name: "Live Demo",
            type: "file",
            fileType: "live-demo",
            url: "https://gee-web-dev-portfolio.vercel.app",
          },
          {
            id: idIncrement(),
            name: "README.md",
            type: "file",
            fileType: "readme",
            content: "WIP",
          },
        ],
      },
    ],
  },
  {
    id: idIncrement(),
    name: "Audio Production",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "WinterBeast (2020 - current)",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Hail",
            type: "folder",
            children: [
              // {
              //   id: idIncrement(),
              //   name: "Child Of A Cursed Temple (unreleased)",
              //   fileType: "album-file",
              //   type: "file",
              // },
              {
                id: idIncrement(),
                name: "Transgression (2024)",
                fileType: "wb-album",
                type: "file",
              },
              {
                id: idIncrement(),
                name: "We Are Nothing (2023)",
                fileType: "wb-album",
                type: "file",
              },
            ],
          },
          {
            id: idIncrement(),
            name: "Old Town Diamonds",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "40 Miles (2024)",
                fileType: "wb-album",
                type: "file",
              },
              {
                id: idIncrement(),
                name: "A Pale Horse (2023)",
                fileType: "wb-album",
                type: "file",
              },
            ],
          },
          {
            id: idIncrement(),
            name: "Hollow Senses - Taurobolium (2023)",
            fileType: "wb-album",
            type: "file",
          },
          {
            id: idIncrement(),
            name: "Fliege - The Invisible Seam (2020)",
            fileType: "wb-album",
            type: "file",
          },
          // {
          //   id: idIncrement(),
          //   name: "L'Acephale",
          //   type: "folder",
          //   children: [
          //     {
          //       id: idIncrement(),
          //       name: "Unnamed LP (WIP)",
          //       fileType: "album-file",
          //       type: "file",
          //     },
          //     {
          //       id: idIncrement(),
          //       name: "Unnamed EP (WIP)",
          //       fileType: "album-file",
          //       type: "file",
          //     },
          //   ],
          // },
          
          // {
          //   id: idIncrement(),
          //   name: "Mistons",
          //   type: "folder",
          //   children: [],
          // },
          // {
          //   id: idIncrement(),
          //   name: "Entrain",
          //   type: "folder",
          //   children: [],
          // },
          // {
          //   id: idIncrement(),
          //   name: "Refrigerated Nurses - Unnamed LP",
          //   fileType: "album-file",
          //   type: "file",
          // },
          // {
          //   id: idIncrement(),
          //   name: "Ebisu",
          //   type: "folder",
          //   children: [],
          // },
          // {
          //   id: idIncrement(),
          //   name: "Twin Perish",
          //   type: "folder",
          //   children: [],
          // },
          // {
          //   id: idIncrement(),
          //   name: "Notnauts - Unnamed LP (unreleased)",
          //   fileType: "album-file",
          //   type: "file",
          // },
          // {
          //   id: idIncrement(),
          //   name: "Hellcows - Singles (unreleased)",
          //   fileType: "album-file",
          //   type: "file",
          // },
        ],
      },
      {
        id: idIncrement(),
        name: "Pre-WinterBeast (2007 - 2019)",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Kolotov Mocktails: Ivy Hall (2019)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "L'Acephale: Self-titled (2019)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Twin Perish: Blue Pour (2018)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Bulldog Shadow: 24-Hour Drunk (2016)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Night Surgeon: Gondola Crimewave (2014)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Night Surgeon: Self-titled (2013)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Steelhymen: 0 || 0/0 (2012)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Night Surgeon: Day For Night (2011)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Blondie: Panic Of Girls (2011)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Shalants: Self-titled (2011)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Casey Spooner: Adult Contemporary (2011)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Fischerspooner: Entertainment (2009)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Mobile: Tales From The City (2008)",
            type: "file",
            fileType: "pre-wb-album",
          },
          {
            id: idIncrement(),
            name: "Stab The Matador: Doctor (2007)",
            type: "file",
            fileType: "pre-wb-album",
          },
        ],
      },
    ],
  },
];