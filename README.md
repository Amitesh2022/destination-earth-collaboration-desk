# Destination Earth Collaboration Desk

## One-sentence benefit
Helps climate teams coordinate shared Earth-system models, trusted data and operational resilience outcomes.

## Live demo
Run the Java service and Vue application locally to use the complete experience.

## Screenshots
![Destination Earth collaboration workspace](docs/screenshot.png)

## Main features
Search modelling collaborations, add a realistic project, progress validation, inspect priorities and open dedicated modelling guidance.

## Technology used
Vue, TypeScript, Pinia, Vue Router, Vite, Spring Boot and Java.

## Installation instructions
Start the backend with `cd backend && mvn spring-boot:run`. In another terminal run `npm install && npm run dev`.

## Commercial licensing/contact
Commercial licensing and implementation support are available through the repository owner.

## Business problem and users
Climate researchers, civil-protection teams, regions and infrastructure operators need one shared view of modelling questions, data and delivery owners.

## Key workflows
Users can filter collaborations, create a Belgian digital-twin project, move it through validation and open dedicated modelling guidance.

## Vue framework highlights
The application uses the Composition API, Pinia computed state, reactive filters and Vue Router pages.

## Java backend highlights
The Spring Boot service provides real list, search, create and update endpoints, validation, clear errors, health reporting and tests.

## Architecture and state flow
Pinia owns the shared client state and synchronises it with the Java API after reads and writes.

## Accessibility and responsive behaviour
Landmarks, labels, visible focus, readable status text and responsive panels support keyboard and mobile users.

## Verification commands
Use `npm test`, `npm run build`, and `cd backend && mvn test package`.

## Structure
`src` contains the Vue experience, `backend` contains the Java service, and `docs` contains verified media.

## Tradeoffs
The demonstration uses an in-memory data store; production deployment would add authentication, model registries, data lineage and compute integrations.

## Roadmap
Add geospatial layers, model versions, validation datasets, partner workspaces and durable storage.
