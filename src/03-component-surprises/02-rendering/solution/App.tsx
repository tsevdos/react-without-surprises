import { useDeferredValue, useState, useTransition } from "react";
import Header from "../../../components/Header/Header";
import ProductResults from "../ProductResults";
import AnalyticsPanel from "../AnalyticsPanel";
import SolutionDetailsPopover from "./DetailsPopover";
import "../App.css";

type Tab = "catalog" | "insights";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("catalog");
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const isSearchStale = query !== deferredQuery;

  function selectTab(tab: Tab) {
    startTransition(() => setActiveTab(tab));
  }

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Rendering priorities & layout — solution"
        tooltip="Prioritize urgent interactions, defer expensive updates when useful, and measure layout before paint only when necessary."
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
          <SolutionDetailsPopover />
        </div>

        {isSearchStale && activeTab === "catalog" && (
          <p className="deferred-status is-stale">Updating results for "{query}"...</p>
        )}

        <div className="priority-tabs" role="tablist" aria-label="Catalog views">
          <button
            id="solution-catalog-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "catalog"}
            aria-controls="solution-catalog-panel"
            onClick={() => selectTab("catalog")}
          >
            Catalog
          </button>
          <button
            id="solution-insights-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "insights"}
            aria-controls="solution-catalog-panel"
            onClick={() => selectTab("insights")}
          >
            Insights
          </button>
        </div>

        <div
          id="solution-catalog-panel"
          className="priority-panel"
          role="tabpanel"
          aria-busy={isPending}
          aria-labelledby={activeTab === "catalog" ? "solution-catalog-tab" : "solution-insights-tab"}
        >
          {isPending ? (
            <p className="priority-pending" aria-live="polite">
              Preparing the selected view...
            </p>
          ) : activeTab === "catalog" ? (
            <div className={isSearchStale ? "deferred-list is-stale" : "deferred-list"}>
              <ProductResults query={deferredQuery} />
            </div>
          ) : (
            <AnalyticsPanel />
          )}
        </div>
      </div>
    </>
  );
}
