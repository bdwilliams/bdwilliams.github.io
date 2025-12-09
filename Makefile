.PHONY: help serve start stop

help:
	@echo "Available commands:"
	@echo "  make serve    - Start the local development server"
	@echo "  make start    - Alias for serve"
	@echo "  make stop     - Stop the server (if running)"

serve:
	@echo "Starting server on http://localhost:3133"
	@echo "Press Ctrl+C to stop"
	@python3 -m http.server 3133

start: serve

stop:
	@echo "To stop the server, press Ctrl+C in the terminal where it's running"

