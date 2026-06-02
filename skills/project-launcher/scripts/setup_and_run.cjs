const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const frontendDir = path.join(projectRoot, 'frontend');
const backendDir = path.join(projectRoot, 'backend');

async function setupFrontend() {
    console.log('--- [Frontend] Checking environment ---');
    if (!fs.existsSync(path.join(frontendDir, 'node_modules'))) {
        console.log('[Frontend] node_modules missing. Running npm install...');
        execSync('npm install', { cwd: frontendDir, stdio: 'inherit' });
    } else {
        console.log('[Frontend] node_modules exists.');
    }
}

async function runFrontend() {
    console.log('[Frontend] Starting development server (Vite)...');
    // We don't use inherit here because we want to let it run in the background via the agent's tool
    // But for this standalone script, we'll just log
    console.log('[INFO] Run "npm run dev" in frontend/ directory.');
}

async function main() {
    try {
        await setupFrontend();
        
        if (fs.existsSync(backendDir)) {
            console.log('--- [Backend] Backend directory detected. ---');
            // Logic for backend setup could go here if needed
        }

        console.log('\n✅ Setup complete! Project is ready to run.');
    } catch (error) {
        console.error('❌ Setup failed:', error.message);
        process.exit(1);
    }
}

main();
