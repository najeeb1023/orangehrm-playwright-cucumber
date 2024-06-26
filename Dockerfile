FROM mcr.microsoft.com/playwright:v1.39.0-jammy
USER root
RUN mkdir /src/
COPY . /src
WORKDIR /src

RUN npm install

RUN npx @playwright/test install

RUN npx playwright install-deps
RUN npm run orangehrm