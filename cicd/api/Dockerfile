FROM node:lts-alpine AS runner

# Set working directory
WORKDIR /app

# Add user account for running the app securely
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 api

RUN npm install -g npm@latest

COPY . /app/

RUN npm install

# Expose the listening port
EXPOSE 3001
ENV PORT 3001

# Run container as non-root (unprivileged) user
# The "api" user is provided in the Node.js Alpine base image
USER api

CMD [ "npm", "start", "--", "-H", "172.40.0.3" ]