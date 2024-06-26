import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Directory } from "../pages/DirectoryPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(150000);
let directoryPage = new Directory(pageFixture.page);

When('User navigates to Directory tab', async function() {
    await directoryPage.goToDirectoryTab();
});

When('User selects job title as {string}', async function(jobTitle: string) {
    await directoryPage.selectJob(jobTitle);
});

Then('Users with {string} are returned', async function(assertUserJobTitle: string) {
    await directoryPage.assertSelectedTitle(assertUserJobTitle);
    
});

