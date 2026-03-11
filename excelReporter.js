import ExcelJS from 'exceljs';
import path from 'path';

class ExcelReporter {
  constructor(options) {
    this.results = [];
    this.EXECUTOR_NAME = 'Ali Bunyamin';
  }

  getCleanMenuName(filePath) {
    let name = path.basename(filePath, '.spec.js').toLowerCase();
    name = name.replace(/[-_]positive/g, '');
    name = name.replace(/[-_]negative/g, '');
    const firstWord = name.split(/[-_]/)[0];
    return firstWord.toUpperCase();
  }

  onTestEnd(test, result) {
    const fullTitle = test.title;
    const fileName = test.location.file;

    let platformName = 'N/A';
    if (test.parent && test.parent.project) {
        platformName = test.parent.project().name || 'Chromium';
    }

    const tcMatch = fullTitle.match(/(TC_[A-Z]_[0-9]+)/);
    const testId = tcMatch ? tcMatch[0] : 'N/A';

    let category = 'GENERAL';
    if (fileName.includes('negative')) category = 'NEGATIVE';
    else if (fileName.includes('positive')) category = 'POSITIVE';

    const description = fullTitle
      .replace(testId + '_Gagal:', '')
      .replace(testId + '_Sukses:', '')
      .replace(testId + ' | ', '')
      .trim();

    this.results.push({
      testId,
      platform: platformName,
      menuName: this.getCleanMenuName(fileName),
      category,
      description,
      status: result.status,
      duration: result.duration,
      executor: this.EXECUTOR_NAME,
      file: fileName
    });
    
    console.log(`✅ Test finished: ${fullTitle} (${result.status})`);
  }

  async onEnd() {
    console.log(`\n🚀 Generating Excel report for ${this.results.length} tests...`);
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Test Results');

    sheet.columns = [
      { key: 'no', width: 6 },
      { key: 'testId', width: 15 },
      { key: 'platform', width: 15 },
      { key: 'preReq', width: 15 }, 
      { key: 'category', width: 15 },
      { key: 'description', width: 50 },
      { key: 'status', width: 15 },
      { key: 'duration', width: 18 },
      { key: 'executor', width: 20 },
      { key: 'file', width: 40 }
    ];

    sheet.mergeCells('C2:J2');
    sheet.getCell('C2').value = 'FORM TEST CASE AUTOMATION';
    sheet.getCell('C2').font = { bold: true, size: 18 };
    sheet.getCell('C2').alignment = { horizontal: 'center' };

    const displayMenu = this.results.length > 0 ? this.results[0].menuName : 'GENERAL';
    sheet.getCell('A4').value = 'PROGRAM :'; sheet.getCell('C4').value = 'saucedemo.com';
    sheet.getCell('A5').value = 'MENU :'; sheet.getCell('C5').value = displayMenu;
    sheet.getCell('A6').value = 'VERSI :'; sheet.getCell('C6').value = 'DEFAULT';
    sheet.getCell('A7').value = 'TANGGAL :'; sheet.getCell('C7').value = new Date().toLocaleDateString('id-ID');

    const headers = ['NO', 'ID', 'PLATFORM/BROWSER', 'PRE-REQUIREMENT', 'KIND OF TEST', 'DESCRIPTION', 'STATUS', 'Duration (ms)', 'EXECUTED BY', 'File Spec'];
    const headerRow = sheet.getRow(8);
    headerRow.values = headers;
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF000000' } };

    this.results.forEach((r, index) => {
      const row = sheet.addRow({
        no: index + 1,
        testId: r.testId,
        platform: r.platform,
        preReq: r.menuName, 
        category: r.category,
        description: r.description,
        status: r.status,
        duration: r.duration,
        executor: r.executor,
        file: r.file
      });

      const statusCell = row.getCell(7);
      statusCell.fill = {
        type: 'pattern', pattern: 'solid',
        fgColor: { argb: r.status === 'passed' ? 'FFB7E1CD' : 'FFFFC7CE' }
      };

      row.eachCell((cell) => {
        cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });
    });

    const outputPath = path.join(process.cwd(), 'playwright-test-report.xlsx');
    await workbook.xlsx.writeFile(outputPath);
    console.log(`\n📊 Excel report successfully generated at: ${outputPath}\n`);
  }
}

export default ExcelReporter;