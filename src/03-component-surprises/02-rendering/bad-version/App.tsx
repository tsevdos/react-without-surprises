import { useState } from "react";
import Header from "../../../components/Header/Header";
import ProductResults from "../ProductResults";
import AnalyticsPanel from "../AnalyticsPanel";
import BadDetailsPopover from "./DetailsPopover";
import "../App.css";

type Tab = "catalog" | "insights";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("catalog");

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Rendering priorities & layout — bad example"
        tooltip="Expensive rendering can compete with urgent interactions, while delayed layout corrections can cause visible shifts."
      />

      <div className="deferred-demo priority-demo">
        <div className="priority-toolbar">
          <label className="deferred-search">
            Search products
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try typing product"
            />
          </label>
          <BadDetailsPopover />
        </div>

        <div className="priority-tabs" role="tablist" aria-label="Catalog views">
          <button
            id="bad-catalog-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "catalog"}
            aria-controls="bad-catalog-panel"
            onClick={() => setActiveTab("catalog")}
          >
            Catalog
          </button>
          <button
            id="bad-insights-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "insights"}
            aria-controls="bad-catalog-panel"
            onClick={() => setActiveTab("insights")}
          >
            Insights
          </button>
        </div>

        <div
          id="bad-catalog-panel"
          className="priority-panel"
          role="tabpanel"
          aria-labelledby={activeTab === "catalog" ? "bad-catalog-tab" : "bad-insights-tab"}
        >
          {activeTab === "catalog" ? <ProductResults query={query} /> : <AnalyticsPanel />}
        </div>
      </div>
    </>
  );
}
