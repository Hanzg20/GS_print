#!/bin/bash
# Build script for Cloudflare Pages

# Install dependencies
pnpm install

# Build the Next.js app
pnpm run build

# Remove any cache directories that might have been created
rm -rf cache .next

# The static files are now in the 'out' directory
echo "Build complete. Output files are in the 'out' directory"