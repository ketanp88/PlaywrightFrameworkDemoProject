import { Page } from "@playwright/test";
import { Assertion } from "playwright-ts-automationframework";

export class MethodBase extends Assertion {

    constructor(page: Page)
    {
        super(page);
    }


}