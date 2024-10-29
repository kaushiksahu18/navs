"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GraduationCap, CornerRightUp, LogOut, Settings } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useState } from "react";

const communityComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "NEET Community",
    href: "/communityneet",
    description: "Join the NEET preparation community.",
  },
  {
    title: "JEE Community",
    href: "/communityjee",
    description: "Join the JEE preparation community.",
  },
  {
    title: "Class 6-12 Community",
    href: "/about6to10",
    description: "Connect with peers for Classes 6-12.",
  },
];

const mentorshipComponents: {
  title: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "6-12 Classes",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "JEE",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "NEET",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Programming",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Art & Design",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Languages",
    href: "/docs/components/progress",
    icon: <GraduationCap className="h-6 w-6" />,
  },
];

function V0Page() {
  const [islogin, setIslogin] = useState(false);
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[100vw] justify-between px-8 py-4 text-2xl">
        {/* Logo */}
        <NavigationMenuItem>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
        </NavigationMenuItem>
        {/* Navigation Menu */}
        <div className="flex">
          {/* Test Series */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Test Series</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/waits"
                    >
                      <GraduationCap className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Writo All India Test Series
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Achieve your best with Writo All India Test Series -
                        Realistic exam practice for real results.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="NEET Exam">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="JEE(Main + Adv)">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/waits" title="Learn More">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Mentorship */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Mentorship</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-4 grid-cols-1">
                {mentorshipComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className="py-3"
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Community */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4 grid-cols-1">
                {communityComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* SGP */}
          <NavigationMenuItem>
            <Link href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                SGP
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Careers */}
          <NavigationMenuItem>
            <Link href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Blogs */}
          <NavigationMenuItem>
            <Link href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
        {/* Login/Signin */}
        {!islogin ? (
          <NavigationMenuItem onClick={() => setIslogin(true)}>
            {/* <Link href="/"> */}
            <Button onClick={() => setIslogin(true)}>Login</Button>
            {/* </Link> */}
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar>
                    <AvatarImage src="/profile.png" alt="@ks" />
                    <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex w-full items-center">
                    kaushiksahu18.dev
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex w-full items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIslogin(false)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "select-none rounded-md px-2 py-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex space-x-3 items-center justify-between group",
              className
            )}
            {...props}
          >
            <div className="space-y-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
            <CornerRightUp className="h-3 w-3 text-base hidden group-hover:block" />
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default V0Page;
