const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const frontendDir = path.join(projectRoot, 'frontend');
const reportPath = path.join(projectRoot, 'docs', 'test-report.md');

console.log('--- Đang chạy tất cả các bản kiểm thử frontend... ---');

let testOutput = '';
let success = true;

try {
  testOutput = execSync('npm test -- --run', { cwd: frontendDir, encoding: 'utf8', stdio: 'pipe' });
} catch (error) {
  testOutput = error.stdout + '\n' + error.stderr;
  success = false;
}

// Parse output (Simple extraction of pass/fail)
const passMatch = testOutput.match(/Tests\s+(\d+)\s+passed/);
const failMatch = testOutput.match(/Tests\s+(\d+)\s+failed/);
const passCount = passMatch ? passMatch[1] : '0';
const failCount = failMatch ? failMatch[1] : '0';

const timestamp = new Date().toLocaleString();
const statusEmoji = success ? '✅ PASS' : '❌ FAIL';

const reportContent = `
# Báo cáo Kiểm thử Frontend (NeuroShin AI)

- **Thời gian:** ${timestamp}
- **Trạng thái:** ${statusEmoji}
- **Kết quả:** ${passCount} Passed, ${failCount} Failed

## Chi tiết đầu ra (Test Output Summary)
\`\`\`text
${testOutput.split('\n').slice(-30).join('\n')}
\`\`\`

---
*Báo cáo này được tạo tự động bởi test-fix-orchestrator skill.*
`;

if (!fs.existsSync(path.dirname(reportPath))) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
}

fs.writeFileSync(reportPath, reportContent);
console.log(`✅ Đã ghi báo cáo vào: ${reportPath}`);

if (!success) {
  process.exit(1);
}
