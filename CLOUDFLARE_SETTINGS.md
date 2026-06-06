# URGENT: Cloudflare Pages Configuration Required

## The deployment is failing because Cloudflare Pages settings need to be updated

### Go to Cloudflare Pages Dashboard:
1. Open https://dash.cloudflare.com
2. Select your account
3. Click on "Workers & Pages" in the left sidebar
4. Find and click on your "GS_print" project

### Update Build Settings:
1. Click on "Settings" tab
2. Scroll down to "Builds & deployments"
3. Find "Build configurations" section
4. Click "Edit configurations" button
5. Change these settings:

   **Framework preset**: Next.js (Static HTML Export)

   **Build command**:
   ```
   npm run build:cf
   ```

   **Build output directory**:
   ```
   out
   ```

   **Root directory (advanced)**:
   ```
   /
   ```
   (or leave empty)

6. Click "Save" button

### After Saving:
- Cloudflare will automatically trigger a new deployment
- The deployment should succeed in 2-3 minutes
- The site will be live at https://print.goldsky.ca

## Why This Works:
- `npm run build:cf` - Builds the site and removes cache files
- `out` directory - Contains only the static HTML/CSS/JS files (all under 25MB)
- The root directory still contains the 28.2MB cache file, but it won't be deployed

## Alternative: Manual Redeploy
If the deployment doesn't trigger automatically:
1. Go to the "Deployments" tab
2. Click "Retry deployment" on the latest failed deployment
OR
3. Make a small change to any file and push to trigger a new deployment