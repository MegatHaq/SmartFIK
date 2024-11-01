import { Overview } from "./components/overview";
import { SideBoxContent } from "./components/sideboxcontent";

export default function TutorLayout({ view, children }) {
  const options = ["Presence", "Communication", "Event", "Payment"];

  return (
    <>
      <Overview
        sideBoxChildren={<SideBoxContent items={options} />}
        mainBoxChildren={children}
      />
    </>
  );
}
