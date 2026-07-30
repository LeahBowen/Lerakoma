import { createFileRoute } from "@tanstack/react-router";
import Page from "@/lib/pages/Testimonials";

export const Route = createFileRoute("/testimonials")({
  component: Page,
});
