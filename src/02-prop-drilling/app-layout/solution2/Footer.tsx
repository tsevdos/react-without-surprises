import { useUserStore } from "./stores/userStore";
import { useAppConfigStore } from "./stores/appConfigStore";

export default function Footer() {
  const name = useUserStore((state) => state.name);
  const { applicationTitle, companyName, version } = useAppConfigStore((state) => state);

  return (
    <footer className="app-footer">
      <p>
        {applicationTitle} - v{version}
      </p>
      <p>&copy; 2026 {companyName}. All rights reserved.</p>
      <p>Legal terms for {name}</p>
    </footer>
  );
}
