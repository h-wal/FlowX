# Web (Next.js) image. Depends on @repo/ui. Build from repo root:
#   docker build -f apps/web/Dockerfile -t n8n-web .
# Pass backend URL at build time so client can reach API:
#   docker build --build-arg NEXT_PUBLIC_API_URL=http://localhost:3030 -f apps/web/Dockerfile -t n8n-web .

FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Builder: install deps, build Next.js (standalone output)
FROM base AS builder

WORKDIR /app

ARG NEXT_PUBLIC_API_URL=http://localhost:3030
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ui/package.json ./packages/ui/
COPY packages/typescript-config ./packages/typescript-config
COPY apps/web/package.json apps/web/next.config.js apps/web/tsconfig.json ./apps/web/

RUN pnpm install --frozen-lockfile

COPY packages/ui ./packages/ui
COPY apps/web ./apps/web

RUN pnpm --filter web build

# Runner: copy standalone server + static assets
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3000

WORKDIR /app/apps/web

CMD ["node", "server.js"]
