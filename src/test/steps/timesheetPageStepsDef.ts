import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { TimeSheet } from "../pages/TimeSheetPage"
import { pageFixture } from "../hooks/pageFixture"

setDefaultTimeout(150000);
let timeSheetFunc = new TimeSheet(pageFixture.page);

When('User navigates to Time Sheet page', async function (){
    await timeSheetFunc.goToTimeSheetAndEnterUser();

});

Given('User is able to sort users', async function (){
    await timeSheetFunc.getUsersTable();
    await timeSheetFunc.getEmployeeTimePeriod();
});

Then('Time is returned for users', async function (){
    await timeSheetFunc.getUsers();
});