# Harvest - Doctor Consultation App

is a comprehensive monorepository designed for efficient doctor consultation management. It integrates a Supabase instance for robust data handling, an Express API for seamless backend operations, and a React application for intuitive user interfaces. Doctors use this platform to approve and generate prescriptions for patients within the Harvest system, ensuring streamlined and secure healthcare interactions.

## Run Locally

Clone the project

```bash
  git clone https://github.com/theharvest420/consult-mono.git
```

Go to the project directory

```bash
  cd consult-mono
```

Install dependencies

```bash
  pnpm install
```

Go to the supabase directory

```bash
  cd apps/supabase
```

Pull the supabase docker images

```bash
  docker compose pull
```

Go back to the root of the project

```bash
  cd ../../
```

Start the server

```bash
  pnpm dev
```

## Supabase

Access supabase dashboard by going to http://172.20.0.7:3000
