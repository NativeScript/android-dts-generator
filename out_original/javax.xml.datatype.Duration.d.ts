/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />

declare module javax {
	export module xml {
		export module datatype {
			export class Duration {
				public constructor();
				public getXMLSchemaType(): javax.xml.namespace.QName;
				public getSign(): number;
				public getYears(): number;
				public getMonths(): number;
				public getDays(): number;
				public getHours(): number;
				public getMinutes(): number;
				public getSeconds(): number;
				public getTimeInMillis(param0: java.util.Calendar): number;
				public getTimeInMillis(param0: java.util.Date): number;
				public getField(param0: javax.xml.datatype.DatatypeConstants.Field): java.lang.Number;
				public isSet(param0: javax.xml.datatype.DatatypeConstants.Field): boolean;
				public add(param0: javax.xml.datatype.Duration): javax.xml.datatype.Duration;
				public addTo(param0: java.util.Calendar): void;
				public addTo(param0: java.util.Date): void;
				public subtract(param0: javax.xml.datatype.Duration): javax.xml.datatype.Duration;
				public multiply(param0: number): javax.xml.datatype.Duration;
				public multiply(param0: java.math.BigDecimal): javax.xml.datatype.Duration;
				public negate(): javax.xml.datatype.Duration;
				public normalizeWith(param0: java.util.Calendar): javax.xml.datatype.Duration;
				public compare(param0: javax.xml.datatype.Duration): number;
				public isLongerThan(param0: javax.xml.datatype.Duration): boolean;
				public isShorterThan(param0: javax.xml.datatype.Duration): boolean;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}
