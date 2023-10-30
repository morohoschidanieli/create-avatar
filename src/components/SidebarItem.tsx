import * as React from "react";
import {
  SidebarItemContent,
  SidebarItemHeader,
  SidebarItemLayout,
} from "@styles/sidebar";
import { SidebarProps } from "@interfaces/sidebar";

const SidebarItem = ({ title, children }: SidebarProps) => {
  return (
    <SidebarItemLayout>
      <SidebarItemHeader>{title}</SidebarItemHeader>
      <SidebarItemContent> {children}</SidebarItemContent>
    </SidebarItemLayout>
  );
};

export default SidebarItem;
