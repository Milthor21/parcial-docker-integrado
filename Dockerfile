FROM node:18-alpine
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY . .
RUN chown -R nodeapp:nodeapp /app
USER nodeapp
EXPOSE 3000
CMD ["npm","start"]
