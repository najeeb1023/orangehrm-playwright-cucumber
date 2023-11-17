import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Directory } from "../pages/DirectoryPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(15000);

When('User navigates to Directory tab', async function() {
    let directoryPage = new Directory(pageFixture.page);
    await directoryPage.goToDirectoryTab();
})

When('User selects job title as {string}', async function(jobTitle: string) {
    let directoryPage = new Directory(pageFixture.page);
    await directoryPage.selectJob(jobTitle);
})

Then('Users with {string} are returned', async function(assertUserJobTitle: string) {
    let directoryPage = new Directory(pageFixture.page);
    await directoryPage.assertSelectedTitle(assertUserJobTitle);
    
})

