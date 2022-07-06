import { Tabs as MuiTabs, Tab as MuiTab, Box } from "@mui/material";
import { TabsEnum } from "types";

interface TabsProps {
  tabs: { key: number; label: string }[];
  tab: TabsEnum;
  handleTabChange: (tab: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "data-testid": `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export function Tabs({ tabs, tab, handleTabChange, ...rest }: TabsProps) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "25px 0 25px" }}>
      <MuiTabs
        value={tab}
        onChange={(_: React.SyntheticEvent, tab: TabsEnum) => handleTabChange(tab)}
        aria-label="Tabs Navigation"
      >
        {tabs.map((tab) => (
          <MuiTab key={tab.key} label={tab.label} value={tab.key} {...a11yProps(tab.key)} />
        ))}
      </MuiTabs>
    </Box>
  );
}
