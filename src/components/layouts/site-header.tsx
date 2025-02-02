import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { LayoutDashboard, LogOut } from "lucide-react";

import { getUserEmail } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export async function SiteHeader() {
  const user = await currentUser();

  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email = getUserEmail(user);

  return (
    <header className="top-0 z-50 w-full">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ""}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/stores">
                        <LayoutDashboard
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Panel general
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/sign-out">
                      <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                      Cerrar sesión
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Creá tu tienda
                <span className="sr-only">Iniciar sesión</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
