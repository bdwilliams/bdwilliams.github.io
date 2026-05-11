.PHONY: help build serve start stop docker-up docker-down docker-build docker-logs

help:
	@echo "Available commands:"
	@echo "  make build         - Regenerate index.html and resume.html from shared content"
	@echo "  make serve         - Start the local development server"
	@echo "  make start         - Alias for serve"
	@echo "  make stop          - Stop the server (if running)"
	@echo "  make docker-up     - Build and start the Traefik-fronted nginx container"
	@echo "  make docker-down   - Stop and remove the container"
	@echo "  make docker-build  - Rebuild the Docker image"
	@echo "  make docker-logs   - Tail the container logs"

build:
	@echo "Building site"
	@node build-site.mjs

serve: build
	@echo "Starting server on http://localhost:3133"
	@echo "Press Ctrl+C to stop"
	@python3 -m http.server 3133

start: serve

stop:
	@echo "To stop the server, press Ctrl+C in the terminal where it's running"

docker-up: build
	@docker compose up -d --build

docker-down:
	@docker compose down

docker-build: build
	@docker compose build

docker-logs:
	@docker compose logs -f
