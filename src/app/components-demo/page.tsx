"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Kbd } from "@/components/ui/kbd";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NativeSelect } from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Terminal, AlertCircle, Check, ChevronDown, Mail, User, Settings, Info } from "lucide-react";

export default function ComponentsDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [progress, setProgress] = useState(45);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All shadcn/ui Components</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            A comprehensive showcase of all 53 installed shadcn/ui components with real-world examples.
          </p>
        </div>

        <div className="space-y-12">
          {/* Accordion */}
          <section id="accordion">
            <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
            <Card>
              <CardHeader>
                <CardTitle>FAQ Section</CardTitle>
                <CardDescription>Expandable content panels</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                    <AccordionContent>
                      shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS.
                      It's not a component library, but a collection of components you can copy and paste into your apps.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes! All components follow WAI-ARIA design patterns and use Radix UI primitives for accessibility.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely! Since you own the code, you can customize everything to match your design system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Alert */}
          <section id="alert">
            <h2 className="text-2xl font-semibold mb-4">Alert</h2>
            <div className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Deployment Successful!</AlertTitle>
                <AlertDescription>
                  Your application has been deployed to production successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Alert Dialog */}
          <section id="alert-dialog">
            <h2 className="text-2xl font-semibold mb-4">Alert Dialog</h2>
            <Card>
              <CardHeader>
                <CardTitle>Confirmation Dialog</CardTitle>
                <CardDescription>Modal dialog for important confirmations</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </section>

          {/* Aspect Ratio */}
          <section id="aspect-ratio">
            <h2 className="text-2xl font-semibold mb-4">Aspect Ratio</h2>
            <Card>
              <CardHeader>
                <CardTitle>Image Container</CardTitle>
                <CardDescription>Maintain consistent aspect ratios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full max-w-md">
                  <AspectRatio ratio={16 / 9} className="bg-zinc-200 dark:bg-zinc-800 rounded-md flex items-center justify-center">
                    <span className="text-zinc-500">16:9 Aspect Ratio</span>
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avatar */}
          <section id="avatar">
            <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
            <Card>
              <CardHeader>
                <CardTitle>User Profile Pictures</CardTitle>
                <CardDescription>Display user avatars with fallbacks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badge */}
          <section id="badge">
            <h2 className="text-2xl font-semibold mb-4">Badge</h2>
            <Card>
              <CardHeader>
                <CardTitle>Status Indicators</CardTitle>
                <CardDescription>Labels and tags for categorization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-green-500">Custom</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Breadcrumb */}
          <section id="breadcrumb">
            <h2 className="text-2xl font-semibold mb-4">Breadcrumb</h2>
            <Card>
              <CardHeader>
                <CardTitle>Navigation Trail</CardTitle>
                <CardDescription>Show current location in site hierarchy</CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Laptops</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>
          </section>

          {/* Button & Button Group */}
          <section id="button">
            <h2 className="text-2xl font-semibold mb-4">Button & Button Group</h2>
            <Card>
              <CardHeader>
                <CardTitle>Action Buttons</CardTitle>
                <CardDescription>All button variants and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Settings className="h-4 w-4" /></Button>
                </div>
                <Separator />
                <ButtonGroup>
                  <Button variant="outline">Left</Button>
                  <Button variant="outline">Center</Button>
                  <Button variant="outline">Right</Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </section>

          {/* Calendar */}
          <section id="calendar">
            <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
            <Card>
              <CardHeader>
                <CardTitle>Date Picker</CardTitle>
                <CardDescription>Select dates with an interactive calendar</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </section>

          {/* Carousel */}
          <section id="carousel">
            <h2 className="text-2xl font-semibold mb-4">Carousel</h2>
            <Card>
              <CardHeader>
                <CardTitle>Image Slider</CardTitle>
                <CardDescription>Swipeable content carousel</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </section>

          {/* Checkbox */}
          <section id="checkbox">
            <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Multi-select options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" defaultChecked />
                  <label htmlFor="marketing" className="text-sm font-medium leading-none">
                    Receive marketing emails
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <label htmlFor="disabled" className="text-sm font-medium leading-none opacity-50">
                    Disabled option
                  </label>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Collapsible */}
          <section id="collapsible">
            <h2 className="text-2xl font-semibold mb-4">Collapsible</h2>
            <Card>
              <CardHeader>
                <CardTitle>Expandable Section</CardTitle>
                <CardDescription>Toggle content visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm mt-2">
                    @radix-ui/primitives
                  </div>
                  <CollapsibleContent className="space-y-2 mt-2">
                    <div className="rounded-md border px-4 py-2 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-2 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </section>

          {/* Command */}
          <section id="command">
            <h2 className="text-2xl font-semibold mb-4">Command</h2>
            <Card>
              <CardHeader>
                <CardTitle>Command Palette</CardTitle>
                <CardDescription>Fast, composable command menu</CardDescription>
              </CardHeader>
              <CardContent>
                <Command className="rounded-lg border">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </CommandItem>
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </CommandItem>
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </section>

          {/* Context Menu */}
          <section id="context-menu">
            <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
            <Card>
              <CardHeader>
                <CardTitle>Right-Click Menu</CardTitle>
                <CardDescription>Display context menu on right click</CardDescription>
              </CardHeader>
              <CardContent>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Settings</ContextMenuItem>
                    <ContextMenuItem>Logout</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>
          </section>

          {/* Dialog */}
          <section id="dialog">
            <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
            <Card>
              <CardHeader>
                <CardTitle>Modal Dialog</CardTitle>
                <CardDescription>Overlay dialog for forms and content</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" defaultValue="John Doe" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">Username</Label>
                        <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </section>

          {/* Drawer */}
          <section id="drawer">
            <h2 className="text-2xl font-semibold mb-4">Drawer</h2>
            <Card>
              <CardHeader>
                <CardTitle>Side Panel</CardTitle>
                <CardDescription>Slide-in panel from screen edge</CardDescription>
              </CardHeader>
              <CardContent>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>
          </section>

          {/* Dropdown Menu */}
          <section id="dropdown-menu">
            <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
            <Card>
              <CardHeader>
                <CardTitle>Action Menu</CardTitle>
                <CardDescription>Dropdown menu for actions</CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </section>

          {/* Hover Card */}
          <section id="hover-card">
            <h2 className="text-2xl font-semibold mb-4">Hover Card</h2>
            <Card>
              <CardHeader>
                <CardTitle>Preview on Hover</CardTitle>
                <CardDescription>Display rich content on hover</CardDescription>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>NX</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          </section>

          {/* Input, Input Group, Input OTP */}
          <section id="input">
            <h2 className="text-2xl font-semibold mb-4">Input Variants</h2>
            <Card>
              <CardHeader>
                <CardTitle>Form Inputs</CardTitle>
                <CardDescription>Text input, groups, and OTP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
                <div className="space-y-2">
                  <Label>Input Group</Label>
                  <InputGroup>
                    <Input placeholder="Search..." />
                  </InputGroup>
                </div>
                <div className="space-y-2">
                  <Label>One-Time Password</Label>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Kbd */}
          <section id="kbd">
            <h2 className="text-2xl font-semibold mb-4">Keyboard Key</h2>
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Shortcuts</CardTitle>
                <CardDescription>Display keyboard key combinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Save:</span>
                    <Kbd>⌘</Kbd>
                    <Kbd>S</Kbd>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Copy:</span>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>C</Kbd>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Paste:</span>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>V</Kbd>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Label */}
          <section id="label">
            <h2 className="text-2xl font-semibold mb-4">Label</h2>
            <Card>
              <CardHeader>
                <CardTitle>Form Labels</CardTitle>
                <CardDescription>Accessible labels for form fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Menubar */}
          <section id="menubar">
            <h2 className="text-2xl font-semibold mb-4">Menubar</h2>
            <Card>
              <CardHeader>
                <CardTitle>Application Menu</CardTitle>
                <CardDescription>Desktop-style menu bar</CardDescription>
              </CardHeader>
              <CardContent>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New Tab</MenubarItem>
                      <MenubarItem>New Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Share</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Undo</MenubarItem>
                      <MenubarItem>Redo</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>
          </section>

          {/* Navigation Menu */}
          <section id="navigation-menu">
            <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
            <Card>
              <CardHeader>
                <CardTitle>Site Navigation</CardTitle>
                <CardDescription>Accessible navigation menu</CardDescription>
              </CardHeader>
              <CardContent>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px]">
                          <NavigationMenuLink className="block space-y-1 rounded-md p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <div className="text-sm font-medium">Introduction</div>
                            <p className="text-sm text-zinc-500">Re-usable components built with Radix UI.</p>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium">
                        Documentation
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>
          </section>

          {/* Native Select */}
          <section id="native-select">
            <h2 className="text-2xl font-semibold mb-4">Native Select</h2>
            <Card>
              <CardHeader>
                <CardTitle>HTML Select</CardTitle>
                <CardDescription>Native select dropdown</CardDescription>
              </CardHeader>
              <CardContent>
                <NativeSelect>
                  <option value="">Select a fruit</option>
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </NativeSelect>
              </CardContent>
            </Card>
          </section>

          {/* Pagination */}
          <section id="pagination">
            <h2 className="text-2xl font-semibold mb-4">Pagination</h2>
            <Card>
              <CardHeader>
                <CardTitle>Page Navigation</CardTitle>
                <CardDescription>Navigate through paginated content</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>
          </section>

          {/* Popover */}
          <section id="popover">
            <h2 className="text-2xl font-semibold mb-4">Popover</h2>
            <Card>
              <CardHeader>
                <CardTitle>Floating Content</CardTitle>
                <CardDescription>Display content in a popover</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-zinc-500">Set the dimensions for the layer.</p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </section>

          {/* Progress */}
          <section id="progress">
            <h2 className="text-2xl font-semibold mb-4">Progress</h2>
            <Card>
              <CardHeader>
                <CardTitle>Progress Indicator</CardTitle>
                <CardDescription>Show task completion status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Upload Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    Increase
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    Decrease
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Radio Group */}
          <section id="radio-group">
            <h2 className="text-2xl font-semibold mb-4">Radio Group</h2>
            <Card>
              <CardHeader>
                <CardTitle>Single Selection</CardTitle>
                <CardDescription>Choose one option from a group</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </section>

          {/* Resizable */}
          <section id="resizable">
            <h2 className="text-2xl font-semibold mb-4">Resizable</h2>
            <Card>
              <CardHeader>
                <CardTitle>Split Panels</CardTitle>
                <CardDescription>Resizable panel layout</CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Panel One</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Panel Two</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>
          </section>

          {/* Scroll Area */}
          <section id="scroll-area">
            <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
            <Card>
              <CardHeader>
                <CardTitle>Scrollable Content</CardTitle>
                <CardDescription>Custom styled scrollbar</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72 w-full rounded-md border p-4">
                  <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Item {i + 1} - This is a scrollable area with custom styling.
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </section>

          {/* Select */}
          <section id="select">
            <h2 className="text-2xl font-semibold mb-4">Select</h2>
            <Card>
              <CardHeader>
                <CardTitle>Custom Select</CardTitle>
                <CardDescription>Styled select dropdown</CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </section>

          {/* Separator */}
          <section id="separator">
            <h2 className="text-2xl font-semibold mb-4">Separator</h2>
            <Card>
              <CardHeader>
                <CardTitle>Visual Divider</CardTitle>
                <CardDescription>Separate content sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>Section One</div>
                <Separator />
                <div>Section Two</div>
                <Separator />
                <div>Section Three</div>
              </CardContent>
            </Card>
          </section>

          {/* Sheet */}
          <section id="sheet">
            <h2 className="text-2xl font-semibold mb-4">Sheet</h2>
            <Card>
              <CardHeader>
                <CardTitle>Slide-over Panel</CardTitle>
                <CardDescription>Sheet sliding from screen edge</CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sheet-name" className="text-right">Name</Label>
                        <Input id="sheet-name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </section>

          {/* Skeleton */}
          <section id="skeleton">
            <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
            <Card>
              <CardHeader>
                <CardTitle>Loading Placeholder</CardTitle>
                <CardDescription>Show loading state</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>
          </section>

          {/* Slider */}
          <section id="slider">
            <h2 className="text-2xl font-semibold mb-4">Slider</h2>
            <Card>
              <CardHeader>
                <CardTitle>Range Input</CardTitle>
                <CardDescription>Select value from range</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Volume</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <Label>Brightness</Label>
                  <Slider defaultValue={[75]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Spinner */}
          <section id="spinner">
            <h2 className="text-2xl font-semibold mb-4">Spinner</h2>
            <Card>
              <CardHeader>
                <CardTitle>Loading Indicator</CardTitle>
                <CardDescription>Show loading animation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 items-center">
                  <Spinner />
                  <Spinner className="h-8 w-8" />
                  <Spinner className="h-12 w-12" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Switch */}
          <section id="switch">
            <h2 className="text-2xl font-semibold mb-4">Switch</h2>
            <Card>
              <CardHeader>
                <CardTitle>Toggle Switch</CardTitle>
                <CardDescription>On/off toggle control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Enable Notifications</Label>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Table */}
          <section id="table">
            <h2 className="text-2xl font-semibold mb-4">Table</h2>
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Display tabular data</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV003</TableCell>
                      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
                      <TableCell>Bank Transfer</TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Tabs */}
          <section id="tabs">
            <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
            <Card>
              <CardHeader>
                <CardTitle>Tabbed Content</CardTitle>
                <CardDescription>Switch between different views</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tab-name">Name</Label>
                      <Input id="tab-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tab-username">Username</Label>
                      <Input id="tab-username" defaultValue="@peduarte" />
                    </div>
                  </TabsContent>
                  <TabsContent value="password" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </TabsContent>
                  <TabsContent value="settings">
                    <p className="text-sm text-zinc-500">Settings content goes here.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Textarea */}
          <section id="textarea">
            <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
            <Card>
              <CardHeader>
                <CardTitle>Multi-line Input</CardTitle>
                <CardDescription>Text area for longer content</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Type your message here." className="min-h-[100px]" />
              </CardContent>
            </Card>
          </section>

          {/* Toggle */}
          <section id="toggle">
            <h2 className="text-2xl font-semibold mb-4">Toggle</h2>
            <Card>
              <CardHeader>
                <CardTitle>Toggle Button</CardTitle>
                <CardDescription>Single toggle control</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Toggle aria-label="Toggle italic">
                    <span className="font-bold">B</span>
                  </Toggle>
                  <Toggle aria-label="Toggle italic">
                    <span className="italic">I</span>
                  </Toggle>
                  <Toggle aria-label="Toggle underline">
                    <span className="underline">U</span>
                  </Toggle>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Toggle Group */}
          <section id="toggle-group">
            <h2 className="text-2xl font-semibold mb-4">Toggle Group</h2>
            <Card>
              <CardHeader>
                <CardTitle>Multiple Toggles</CardTitle>
                <CardDescription>Group of toggle controls</CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <span className="font-bold">B</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <span className="italic">I</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <span className="underline">U</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>
          </section>

          {/* Tooltip */}
          <section id="tooltip">
            <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
            <Card>
              <CardHeader>
                <CardTitle>Helpful Hints</CardTitle>
                <CardDescription>Display tooltip on hover</CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>More information</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Back to top */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
