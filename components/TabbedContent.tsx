import React, { useState } from "react";
import TabStyle from "@/styles/Tab.module.css";
import { useRouter } from "next/router";

interface Props {
  tabs: Tab[];
}

const TabbedContent: React.FC<Props> = ({ tabs }) => {
  const [selectedTabId, setSelectedTabId] = useState<number>(tabs[0].id);
  const router = useRouter();

  const handleTabClick = (tabId: number) => {
    setSelectedTabId(tabId);
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  const renderContent = (selectedTab: any) => {
    switch (selectedTab.id) {
      case 1:
        return (
          <div className={TabStyle.infomationWrapper}>
            {selectedTab?.content?.items?.map((item: any, key: any) => {
              return (
                <div
                  className={TabStyle.card}
                  onClick={() => {
                    router.push(`/users/${item.id}`, undefined, {
                      shallow: true,
                    });
                  }}
                  key={key}
                >
                  <div className={TabStyle.cardHeader}>
                    <h2>ID: {item?.id}</h2>
                  </div>
                  <div className={TabStyle.cardBody}>
                    <p>score: {item?.score}</p>
                    <p>organizations_url: {item?.organizations_url}</p>
                    <p>site_admin: {item?.site_admin}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className={TabStyle.infomationWrapper}>
            {selectedTab?.content?.items?.map((item: any, key: any) => {
              return (
                <div className={TabStyle.card}>
                  <div className={TabStyle.cardHeader}>
                    <h2>full name: {item?.full_name}</h2>
                  </div>
                  <div className={TabStyle.cardBody}>
                    <p>score: {item?.score}</p>
                    <p>watchers count: {item.watchers_count}</p>
                    <p>forks: {item?.forks}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }

    return null;
  };

  return (
    <div className={TabStyle.tabbedContent}>
      <div className={TabStyle.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === selectedTabId ? "active" : ""}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={TabStyle.tabContent}>{renderContent(selectedTab)}</div>
    </div>
  );
};

export default TabbedContent;
