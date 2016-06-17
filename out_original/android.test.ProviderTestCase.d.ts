/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.test.IsolatedContext.d.ts" />
/// <reference path="./android.test.mock.MockContentResolver.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ProviderTestCase {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.lang.Class, param1: string);
			public getProvider(): android.content.ContentProvider;
			public setUp(): void;
			public tearDown(): void;
			public getMockContentResolver(): android.test.mock.MockContentResolver;
			public getMockContext(): android.test.IsolatedContext;
			public static newResolverWithContentProviderFromSql(param0: android.content.Context, param1: java.lang.Class, param2: string, param3: string, param4: number, param5: string): android.content.ContentResolver;
		}
	}
}
