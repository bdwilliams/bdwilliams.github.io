# iambrianwilliams.test Traefik setup

This project is configured to be served by Traefik at:

- `http://www.iambrianwilliams.test`
- `https://www.iambrianwilliams.test`

## Prerequisites

- Docker and Docker Compose installed
- A running Traefik instance with entrypoints named `web` and `websecure`
- A Docker network named `dev_proxy` that Traefik is connected to

## 1) Add local DNS mapping

Add this line to your hosts file:

`127.0.0.1 www.iambrianwilliams.test`

Linux command:

`echo "127.0.0.1 www.iambrianwilliams.test" | sudo tee -a /etc/hosts`

## 2) Build the static site

The HTML files are generated from shared content. Regenerate before (re)building the container:

`make build`

## 3) Start the site container

From this project directory:

`docker compose up -d --build`

## 4) Verify

Open:

- `http://www.iambrianwilliams.test`
- `https://www.iambrianwilliams.test`
- `https://www.iambrianwilliams.test/resume.html`

Or via curl:

`curl -I https://www.iambrianwilliams.test`
