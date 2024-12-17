"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

const MediaPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const resolvedParams = use(params); // Unwrap the async params
  const [id] = useState(resolvedParams.id);

  return (
    <div>
      <h1>Media information for ID: {id || "Loading..."}</h1>
    </div>
  );
};

export default MediaPage;

