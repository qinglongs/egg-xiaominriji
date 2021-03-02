import * as puppeteer from 'puppeteer';

/**
 * @function 将网页转换成pdf
 * @param uri 网页地址
 */
const htmlToPdf = async (uri: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(uri, {
    waitUntil: 'load',
  });
  const pdf = await page.pdf({ path: '', format: 'a4' });

  await browser.close();

  return pdf;
};

export default htmlToPdf;
