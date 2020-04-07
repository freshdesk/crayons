import { newE2EPage } from '@stencil/core/testing';

describe('fw-timepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fw-timepicker></fw-timepicker>');
    const element = await page.find('fw-timepicker');
    expect(element).toHaveClass('hydrated');
  });

  it('it emits fwBlur when the focus is changed away from the component', async () => {
    const page = await newE2EPage();

    await page.setContent(`<fw-timepicker></fw-timepicker>`);
    const fwBlur = await page.spyOnEvent('fwBlur');
    const element = await page.find('fw-timepicker');

    await element.click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await page.waitForChanges();

    expect(fwBlur).toHaveReceivedEvent();
  });

  it('it emits fwFocus when the focus is on the component', async () => {
    const page = await newE2EPage();

    await page.setContent(`<fw-timepicker></fw-timepicker>`);
    const fwFocus = await page.spyOnEvent('fwFocus');
    const element = await page.find('fw-timepicker');

    await element.click();
    await page.keyboard.press('Tab');

    await page.waitForChanges();

    expect(fwFocus).toHaveReceivedEvent();
  });

  it('it emits fwFocus when the focus is on the component', async () => {
    const page = await newE2EPage();

    await page.setContent(`<fw-timepicker></fw-timepicker>`);
    const fwFocus = await page.spyOnEvent('fwFocus');
    const element = await page.find('fw-timepicker');

    await element.click();
    await page.keyboard.press('Tab');

    await page.waitForChanges();

    expect(fwFocus).toHaveReceivedEvent();
  });

  it('it sets interval as per the property provided', async () => {
    const page = await newE2EPage();

    await page.setContent(`<fw-timepicker min-time="09:00 AM" interval=15></fw-timepicker>`);
    const el = await page.find('fw-timepicker');
    const selectEl = await page.find('fw-select');
    expect(el.shadowRoot).toEqualHtml(`<fw-select class="hydrated"></fw-select>`);
  });
});
