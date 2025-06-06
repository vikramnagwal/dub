import { Globe } from "@dub/ui/icons";
import { StepPage } from "../step-page";
import { DefaultDomainSelector } from "./default-domain-selector";

export default function Domain() {
  return (
    <StepPage
      icon={Globe}
      title="Add a custom domain"
      description="Take your links to the next level with your own branding."
      className="max-w-none"
    >
      <DefaultDomainSelector />
    </StepPage>
  );
}
