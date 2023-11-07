import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { TimeSheet } from "../pages/TimeSheetPage"
import { pageFixture } from "../hooks/pageFixture"

setDefaultTimeout(15000)

When('User navigates to Time Sheet page', async function (){
    let timeSheetFunc = new TimeSheet(pageFixture.page);
    await timeSheetFunc.goToTimeSheetAndEnterUser();

})

Given('User is able to sort users', async function (){
    let timeSheetFunc = new TimeSheet(pageFixture.page);
    await timeSheetFunc.getEmployeeTimePeriod();
})

Then('Time is returned for users', async function (){

})