/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module sax {
				export class TemplatesHandler {
					public getTemplates(): javax.xml.transform.Templates;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
				}
			}
		}
	}
}
