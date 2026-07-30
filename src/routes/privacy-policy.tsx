import { createFileRoute } from "@tanstack/react-router";
import Page from "@/lib/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy-policy")({
  component: Page,
});
