"use client";
import { useState } from "react";
import TreeNode from "@/components/TreeNode";
import type { TreeNodeProps } from "@/components/TreeNode";
import ColorToggleContext from "@/context/ColorToggleContext";

let id = 0;
function idIncrement() {
  return ++id;
}

const treeData: TreeNodeProps["node"][] = [
  {
    id: idIncrement(),
    name: "Project A",
    type: "folder",
    children: [
      { id: idIncrement(), name: "README.md", type: "file" },
      {
        id: idIncrement(),
        name: "src",
        type: "folder",
        children: [{ id: idIncrement(), name: "index.ts", type: "file" }],
      },
    ],
  },
  {
    id: idIncrement(),
    name: "Project B",
    type: "folder",
    children: [
      { id: idIncrement(), name: "index.ts", type: "file" },
      { id: idIncrement(), name: "index.ts", type: "file" },
      { id: idIncrement(), name: "index.ts", type: "file" },
    ],
  },
  {
    id: idIncrement(),
    name: "Project C",
    type: "folder",
    children: [
      { id: idIncrement(), name: "index.ts", type: "file" },
      { id: idIncrement(), name: "index.ts", type: "file" },
      {
        id: idIncrement(),
        name: "index.ts",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "index.ts",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "index.ts",
                type: "folder",
                children: [
                  { id: idIncrement(), name: "index.ts", type: "file" },
                ],
              },
            ],
          },
          {
            id: idIncrement(),
            name: "index.ts",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "index.ts",
                type: "folder",
                children: [
                  { id: idIncrement(), name: "index.ts", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      { id: idIncrement(), name: "index.ts", type: "file" },
    ],
  },
];

export default function ProjectsPage() {
  const [colorToggle, setColorToggle] = useState(true);

  function toggleColorHandler() {
    setColorToggle((prev) => !prev);
  }

  return (
    <ColorToggleContext.Provider value={colorToggle}>
      <main className="p-8 bg-white min-h-screen">
        <h1 className="font-mono text-xl mb-4">Projects Directory</h1>
        <button onClick={toggleColorHandler}>color</button>
        {treeData.map((node, index) => (
          <TreeNode
            key={node.id}
            node={node}
            isLast={index === treeData.length - 1}
          />
        ))}
      </main>
    </ColorToggleContext.Provider>
  );
}

// try {
//   const res = await fetch("https://api.github.com/users/GEEspinosa/repos");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const repos = await res.json();
//   return (
//     <main className="p-8">
//       <h1 className="mt-4">Projects</h1>
//       <ProjectList repos={repos} />
//     </main>
//   );
// } catch (error: unknown) {
//   let message = "Unknown error";

//   if (error instanceof Error) {
//     message = error.message;
//   }

//   return (
//     <main className="p-8">
//       <h1 className="mt-4">Projects</h1>
//       <p className="text-red-600">Error: {message}</p>;
//     </main>
//   );
// } 
