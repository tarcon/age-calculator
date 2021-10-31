import React from "react";
import { useRouter } from "aleph/react";

export default function Age() {
  const router = useRouter();
  const age = router.params["age"];
  return (
    <div>
      <h1>Your age is</h1>
      <hr />
      <h2>{age}</h2>
    </div>
  );
}
