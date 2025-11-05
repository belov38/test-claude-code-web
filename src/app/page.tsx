import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            v16.0.1
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Next.js + shadcn/ui
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            A production-ready starter with Next.js 16, React 19, TypeScript,
            Tailwind CSS 4, and shadcn/ui components
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/examples">
              <Button size="lg">View Examples</Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Docs
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 16</CardTitle>
                <CardDescription>Latest App Router</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Built with the latest Next.js features including App Router,
                  Server Components, and optimized for performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>Beautiful Components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Re-usable components built with Radix UI and Tailwind CSS.
                  Fully customizable and accessible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>Type-Safe Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Full TypeScript support for better developer experience and
                  fewer runtime errors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Docker Ready</CardTitle>
                <CardDescription>Production Optimized</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Multi-stage Dockerfile with standalone output for minimal
                  image size and fast deployments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CI/CD Pipeline</CardTitle>
                <CardDescription>GitHub Actions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Automated testing, linting, and deployment to Google
                  Container Registry with security scanning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS 4</CardTitle>
                <CardDescription>Modern Styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Utility-first CSS framework with the latest v4 features for
                  rapid UI development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Tech Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            <Badge variant="secondary">Next.js 16</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS 4</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">GitHub Actions</Badge>
            <Badge variant="secondary">GCR</Badge>
            <Badge variant="secondary">ESLint</Badge>
            <Badge variant="secondary">Radix UI</Badge>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-zinc-500">
          <p>
            Built with Next.js and shadcn/ui. Ready for deployment to Google
            Cloud.
          </p>
        </div>
      </div>
    </div>
  );
}
