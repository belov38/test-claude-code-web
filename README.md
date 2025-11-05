# Next.js App with shadcn/ui and Docker

A modern Next.js application with shadcn/ui components, Docker support, and CI/CD pipeline for Google Container Registry.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Google Container Registry** - Container image registry

## Getting Started

### Prerequisites

- Node.js 24 LTS or later
- npm or yarn
- Docker (for containerization)
- Google Cloud Platform account (for GCR deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-claude-code-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Docker

### Build Docker Image

```bash
docker build -t nextjs-app .
```

### Run Docker Container

```bash
docker run -p 3000:3000 nextjs-app
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. **Tests and Lints** - Runs on every push and pull request
2. **Builds and Pushes to GCR** - Automatically builds and pushes Docker images to Google Container Registry on main/develop branch pushes
3. **Security Scanning** - Scans for vulnerabilities using Trivy

### Required GitHub Secrets

To enable the CI/CD pipeline, add these secrets to your GitHub repository:

- `GCP_PROJECT_ID` - Your Google Cloud Project ID
- `GCP_SA_KEY` - Service account key JSON with permissions for GCR

### Setting up GCP Service Account

1. Create a service account in Google Cloud Console
2. Grant the following roles:
   - `Storage Admin` (for GCR access)
   - `Service Account User`
3. Create and download a JSON key
4. Add the JSON key content as `GCP_SA_KEY` secret in GitHub

## shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Project Structure

```
.
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utility functions
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── Dockerfile           # Docker configuration
├── .dockerignore       # Docker ignore rules
└── next.config.ts      # Next.js configuration
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=
```

## Docker Image Tags

Images are tagged with:
- Branch name (e.g., `main`, `develop`)
- Git SHA (e.g., `main-abc123`)
- `latest` for default branch

## Deployment

### Google Cloud Run (Recommended)

```bash
gcloud run deploy nextjs-app \
  --image gcr.io/YOUR_PROJECT_ID/nextjs-app:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Google Kubernetes Engine

```bash
kubectl create deployment nextjs-app --image=gcr.io/YOUR_PROJECT_ID/nextjs-app:latest
kubectl expose deployment nextjs-app --type=LoadBalancer --port 80 --target-port 3000
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [shadcn/ui Documentation](https://ui.shadcn.com) - learn about shadcn/ui components.

## License

This project is licensed under the terms specified in the LICENSE file.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request
