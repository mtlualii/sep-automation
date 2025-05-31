import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { start } from "repl";

Given('User is on the enrollment page2', async function () { 

    await startApplicationPage.login();

});

Given('User provided required fields', async function () { 

    await startApplicationPage.firstNameInputBox.fill('John');
    await startApplicationPage.lastNameInputBox.fill('Nash');
    await startApplicationPage.emailInputBox.fill('johnnash@gmail.com')
    await startApplicationPage.phoneNumberInputBox.fill('054312312344')

});

Then('The next button is clickable', async function () { 

    await expect(startApplicationPage.nextButton).toBeEnabled();

});

When("User provided an answer to 'How did you hear about us'", async function () { 

    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.facebookOptionFromDropDown.click();


});

Then('The next button ist clickable', async function () { 

    await expect(startApplicationPage.nextButton).toBeEnabled();

});