import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { start } from "repl";
import { StartApplicationPage } from "../../pages/StartApplicationPage.js";

Given('User is on the enrollment page3', async function () { 

    await startApplicationPage.login();

});

Then("Start Application is displayed and it's highlighted in blue", async function () { 

    await expect(startApplicationPage.startApplicationText).toBeVisible();

    const colorofSA = await startApplicationPage.startApplicationText.evaluate(el => getComputedStyle(el).color);
    expect(colorofSA).toBe('rgb(6, 5, 51)');

});

Then("Payment Plan is displayed and it's highlighted in grey", async function () { 

    await expect(startApplicationPage.paymentPlanText).toBeVisible();

    const colorofPP = await startApplicationPage.paymentPlanText.evaluate(el => getComputedStyle(el).color);
    expect(colorofPP).toBe('rgb(130, 154, 177)');


});

Then("Review is displayed and it's highlighted in grey", async function () { 

    await expect(startApplicationPage.paymentPlanText).toBeVisible();

    const colorofR = await startApplicationPage.reviewText.evaluate(el => getComputedStyle(el).color);
    expect(colorofR).toBe('rgb(130, 154, 177)');


});