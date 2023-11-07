import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Claim } from "../pages/ClaimPage";
import { pageFixture } from "../hooks/pageFixture";


setDefaultTimeout(15000);

Given('User is logged in', async function () {

});

When('User navigates to Claim tab', async function () {
    let claimPage = new Claim(pageFixture.page);
    await claimPage.goToClaimTab();
});

When('User selects status as Submitted', async function () {
    let claimPage = new Claim(pageFixture.page);
    await claimPage.selectStatus();
});

Then('All users will status Enbaled are returned', async function () {
    let claimPage = new Claim(pageFixture.page);
    await claimPage.assertSubmittedUsers();
});