import { createFileRoute } from "@tanstack/react-router";
import Page from "@/lib/pages/WhoWeAre";

export const Route = createFileRoute("/who-we-are")({
  component: Page,
});
