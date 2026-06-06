# Cloudflare Pages Deployment Configuration

## Important: Build Configuration Settings

When deploying to Cloudflare Pages, use the following settings in your Cloudflare Pages dashboard:

### Build Settings:
- **Build command**: `npm run build:cf` or `./build.sh`
- **Build output directory**: `out`
- **Node version**: 18

### Environment Variables:
- No special environment variables required for basic deployment

## Build Output Directory

**CRITICAL**: The build output directory MUST be set to `out` (not `/` or `.next`). This is where Next.js exports the static files when using `output: 'export'`.

## Troubleshooting

### File Size Limit Error
If you see "Pages only supports files up to 25 MiB in size":
1. Ensure the build output directory is set to `out` in Cloudflare Pages settings
2. The build process creates cache files that should NOT be deployed
3. Only the `out` directory contents should be uploaded

### Build Process
The build process:
1. Installs dependencies with pnpm
2. Builds the Next.js app with static export
3. Outputs static files to the `out` directory
4. Cleans up cache files (when using `build:cf` script)

## Manual Configuration in Cloudflare Pages Dashboard

1. Go to your Cloudflare Pages project
2. Click on "Settings" → "Builds & deployments"
3. Under "Build configurations", click "Edit configurations"
4. Set:
   - Build command: `npm run build:cf`
   - Build output directory: `out`
   - Root directory: (leave empty or /)
5. Save the changes

This configuration ensures only the optimized static files are deployed, avoiding any cache or build artifacts.