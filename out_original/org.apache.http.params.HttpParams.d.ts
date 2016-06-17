/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module params {
				export class HttpParams {
					public getParameter(param0: string): java.lang.Object;
					public setParameter(param0: string, param1: java.lang.Object): org.apache.http.params.HttpParams;
					public copy(): org.apache.http.params.HttpParams;
					public removeParameter(param0: string): boolean;
					public getLongParameter(param0: string, param1: number): number;
					public setLongParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
					public getIntParameter(param0: string, param1: number): number;
					public setIntParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
					public getDoubleParameter(param0: string, param1: number): number;
					public setDoubleParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
					public getBooleanParameter(param0: string, param1: boolean): boolean;
					public setBooleanParameter(param0: string, param1: boolean): org.apache.http.params.HttpParams;
					public isParameterTrue(param0: string): boolean;
					public isParameterFalse(param0: string): boolean;
				}
			}
		}
	}
}
