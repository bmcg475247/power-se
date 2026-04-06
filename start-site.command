#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -d "node_modules" ]; then
  echo "Installing website dependencies..."
  npm install
fi

echo "Starting the website at http://localhost:4321 ..."
npm run dev:local &
DEV_PID=$!

cleanup() {
  if kill -0 "$DEV_PID" >/dev/null 2>&1; then
    kill "$DEV_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

sleep 4
open -a "Google Chrome" "http://localhost:4321"

echo ""
echo "The site is running in this window."
echo "Keep this window open while you browse."
echo "Press Control+C here when you want to stop the site."
echo ""

wait "$DEV_PID"
