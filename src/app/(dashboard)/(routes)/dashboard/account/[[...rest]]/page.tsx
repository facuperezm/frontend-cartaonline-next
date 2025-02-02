import type { Metadata } from "next";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shell";

import { UserProfile } from "./_components/user-profile";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Administra tu cuenta de usuario en Carta Online",
};

export default function AccountPage() {
  return (
    <Shell variant="sidebar" className="overflow-hidden">
      <PageHeader>
        <PageHeaderHeading>Cuenta</PageHeaderHeading>
        <PageHeaderDescription>
          Administra tu configuración de cuenta
        </PageHeaderDescription>
      </PageHeader>
      <ScrollArea className="w-full pb-3.5">
        <UserProfile />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Shell>
  );
}
