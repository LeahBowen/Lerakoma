import { createFileRoute } from "@tanstack/react-router";
import Page from "@/lib/pages/Initiatives";

export const Route = createFileRoute("/initiatives")({
  component: Page,
});
