/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.SchemaFactory.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class SchemaFactoryLoader {
				public constructor();
				public newFactory(param0: string): javax.xml.validation.SchemaFactory;
			}
		}
	}
}
