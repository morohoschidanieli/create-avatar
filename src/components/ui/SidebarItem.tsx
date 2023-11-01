import * as React from "react";
import { ReactNode } from "react";
import {
  SidebarItemContent,
  SidebarItemHeader,
  SidebarItemLayout,
} from "@styles/sidebar";

export interface SidebarProps {
  title: string;
  children?: ReactNode;
}

const SidebarItem = ({ title, children }: SidebarProps) => {
  return (
    <SidebarItemLayout>
      <SidebarItemHeader>{title}</SidebarItemHeader>
      <SidebarItemContent> {children}</SidebarItemContent>
    </SidebarItemLayout>
  );
};

export default SidebarItem;
