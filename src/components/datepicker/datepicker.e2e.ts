import { newE2EPage } from '@stencil/core/testing';
import moment from 'moment-mini';

describe('fw-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-datepicker></fw-datepicker>');
    const element = await page.find('fw-datepicker');
    expect(element).toHaveClass('hydrated');
  });

  it('should show the datepicker popup when click', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-datepicker></fw-datepicker>');
    const element = await page.find('fw-datepicker >>> fw-input');
    await element.click();
    const popup = await page.find('fw-datepicker >>> .datepicker');
    expect(popup).toBeTruthy();
  });

  it('should emit fwChange when it is updated', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-datepicker></fw-datepicker>');
    const fwChange = await page.spyOnEvent('fwChange');
    const element = await page.find('fw-datepicker >>> fw-input');
    await element.click();

    const updateEle = await page.find('fw-datepicker >>> fw-button.update-date-value');

    element.setProperty('selectedDay', '27-04-2020');
    await updateEle.click()
    expect(fwChange).toHaveReceivedEvent();
  });

  it('range picker should render and emit fwChange', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-datepicker mode="range"></fw-datepicker>');
    const fwChange = await page.spyOnEvent('fwChange');
    const element = await page.find('fw-datepicker >>> fw-input');
    await element.click();
    const popup = await page.find('fw-datepicker >>> .daterangepicker');
    expect(popup).toBeTruthy();

    const updateEle = await page.find('fw-datepicker >>> fw-button.update-range-value');
    element.setProperty('minDate', '01-04-2020');
    element.setProperty('maxDate', '27-04-2020');
    await updateEle.click()
    expect(fwChange).toHaveReceivedEvent();
  })

  it('date should be as per format', async() => {
    const page = await newE2EPage();

    await page.setContent('<fw-datepicker date-format="YYYY-MM-DD"></fw-datepicker>');
    const fwChange = await page.spyOnEvent('fwChange');
    const element = await page.find('fw-datepicker >>> fw-input');
    await element.click();

    const dateEle = await page.find('fw-datepicker >>> .c-day-container.highlight span');
    await dateEle.click();

    const updateEle = await page.find('fw-datepicker >>> fw-button.update-date-value');
    await updateEle.click();

    const datePicketValue = await element.getProperty('value');
    const todayValue = await moment().format('YYYY-MM-DD');

    expect(datePicketValue.toString()).toBe(todayValue.toString());
  })
});
