FROM node:lts-alpine AS runner

# Set working directory
WORKDIR /app

# Add user account for running the app securely
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 react

RUN npm install -g npm@latest

COPY . /app/

RUN npm install

# Expose the listening port
EXPOSE 5173
ENV PORT 5173

# Run container as non-root (unprivileged) user
# The "react" user is provided in the Node.js Alpine base image
USER react

CMD [ "npm", "run", "dev" ]