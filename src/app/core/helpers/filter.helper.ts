export class FilterHelper {
    static removeNullValue(formObject: any): any {
        Object.keys(formObject).forEach((key) => {
            if (formObject[key] === null || formObject[key] === undefined) {
                delete formObject[key];
            }
        });
        return formObject;
    }
}