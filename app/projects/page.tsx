// import Link from "next/link";
//import ProjectList from "@/components/ProjectList";
import TreeNode from "@/components/TreeNode";
import type {TreeNodeProps} from "@/components/TreeNode";

const treeData: TreeNodeProps ["node"][] = [
  {
    id: 1,
    name: "Project A",
    type: "folder",
    children: [
      { id: 2, name: "README.md", type: "file" },
      {
        id: 3,
        name: "src",
        type: "folder",
        children: [{ id: 4, name: "index.ts", type: "file" }],
      },
    ],
  },
  { id: 5, name: "Project B", type: "folder", children: [] },
  { id: 6, name: "Project C", type: "folder", children: [{ id: 7, name: "index.ts", type: "file" }, { id: 8, name: "index.ts", type: "file" }, { id: 9, name: "index.ts", type: "file" }] },
];

export default function ProjectsPage() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <h1 className="font-mono text-xl mb-4">Projects Directory</h1>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </main>
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
