"use client";

interface LiveDemoViewProps {
  demoURL: string;
}

export default function LiveDemoView({ demoURL }: LiveDemoViewProps) {
  return (
    <main >
        <iframe
          src={`${demoURL}`}
          title="placeholder"
          width="100%"
          height="1000px"
         
          frameBorder="0"
        ></iframe> 
    </main>
  );
}
