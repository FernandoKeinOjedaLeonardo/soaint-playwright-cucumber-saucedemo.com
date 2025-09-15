const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  reportName: "E2E - Cucumber Report",
  pageTitle: "Resultados E2E",
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: { name: "chromium", version: "latest" },
    device: "Local",
    platform: { name: process.platform },
  },
});
