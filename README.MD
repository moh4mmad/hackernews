## HackerNews UI

![Logo](https://i.ibb.co/N19Fhk1/diagram.png)

This project displays the latest 100 hacker news posts in a list form. It has been built using Next.js framework with TypeScript. The project makes use of the HackerNews API to fetch the latest news posts and display them in a user-friendly manner.

## Features

- Display of 100 latest hacker news posts in a list form
- A loader before data finishes fetching
- Each news post has a link to navigate to the actual page as a new tab
- Infinite scrolling or pagination
- Animations
- Unit testing and snapshot testing

## Tech Stack

- Next.js
- TypeScript
- HackerNews API

## Prerequisites

- Node.js version 18 or above
- Docker (optional)

## Getting Started

- Clone the repository
  `git@github.com:moh4mmad/hackernews.git`
- Install the dependencies
  `npm install`
- Start the development server
  `npm run dev`
- Access the application in your browser at http://localhost:3000

## Running Tests

- Run the unit tests
  `npm run test`

## Deployment

The application can be deployed using Docker by building a Docker image and running a container.

- Build Docker Image
  `docker build -t hackernews-ui .`
- Run Docker Container
  `docker run -p 3000:3000 hackernews-ui`
