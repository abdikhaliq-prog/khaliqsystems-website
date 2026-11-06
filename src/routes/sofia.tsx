import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofia")({
  beforeLoad: () => {
    throw redirect({ to: "/automations", hash: "sofia" });
  },
});
