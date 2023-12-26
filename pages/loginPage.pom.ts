import { Page } from "@playwright/test";
import { MethodBase } from "./methodBase.pom";
import { WebControl } from "playwright-ts-automationframework";

 export class LoginPage extends MethodBase{

    constructor(page: Page)
    {
        super(page);
    }

    usernameTxtbx = new WebControl(this.page.locator("xpath=//input[@name='username']"), "Username textbox");
    passwordTxtbx = new WebControl(this.page.locator("xpath=//input[@name='password']"), "Password textbox");
    loginBtn = new WebControl(this.page.locator("xpath=//button[@type='submit']"), "Login button");
    
    dashboardBtn = new WebControl(this.page.locator("xpath=//span[text()='Dashboard']"), "Dashboard button");
    
    public async doLogin(username: string, password: string)
    {
        await this.type(this.usernameTxtbx, username);
        await this.type(this.passwordTxtbx, password);
        await this.click(this.loginBtn);
    }

    public async verifySuccessfulLogin()
    {
        await this.verifyIsDisplayed(this.dashboardBtn);
        await this.verifyIsNotDisplayed(this.loginBtn);
    }

 }