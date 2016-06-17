/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.net.URL.d.ts" />

declare module java {
	export module lang {
		export class Package {
			public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
			public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public isAnnotationPresent(param0: java.lang.Class): boolean;
			public getImplementationTitle(): string;
			public getImplementationVendor(): string;
			public getImplementationVersion(): string;
			public getName(): string;
			public static getPackage(param0: string): java.lang.Package;
			public static getPackages(): native.Array<java.lang.Package>;
			public getSpecificationTitle(): string;
			public getSpecificationVendor(): string;
			public getSpecificationVersion(): string;
			public hashCode(): number;
			public isCompatibleWith(param0: string): boolean;
			public isSealed(): boolean;
			public isSealed(param0: java.net.URL): boolean;
			public toString(): string;
		}
	}
}
