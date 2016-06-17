/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattCharacteristic {
			public constructor();
			public constructor(param0: java.util.UUID, param1: number, param2: number);
			public addDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
			public getService(): android.bluetooth.BluetoothGattService;
			public getUuid(): java.util.UUID;
			public getInstanceId(): number;
			public getProperties(): number;
			public getPermissions(): number;
			public getWriteType(): number;
			public setWriteType(param0: number): void;
			public getDescriptors(): java.util.List;
			public getDescriptor(param0: java.util.UUID): android.bluetooth.BluetoothGattDescriptor;
			public getValue(): native.Array<number>;
			public getIntValue(param0: number, param1: number): java.lang.Integer;
			public getFloatValue(param0: number, param1: number): java.lang.Float;
			public getStringValue(param0: number): string;
			public setValue(param0: native.Array<number>): boolean;
			public setValue(param0: number, param1: number, param2: number): boolean;
			public setValue(param0: number, param1: number, param2: number, param3: number): boolean;
			public setValue(param0: string): boolean;
			public static FORMAT_FLOAT: number;
			public static FORMAT_SFLOAT: number;
			public static FORMAT_SINT16: number;
			public static FORMAT_SINT32: number;
			public static FORMAT_SINT8: number;
			public static FORMAT_UINT16: number;
			public static FORMAT_UINT32: number;
			public static FORMAT_UINT8: number;
			public static PERMISSION_READ: number;
			public static PERMISSION_READ_ENCRYPTED: number;
			public static PERMISSION_READ_ENCRYPTED_MITM: number;
			public static PERMISSION_WRITE: number;
			public static PERMISSION_WRITE_ENCRYPTED: number;
			public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
			public static PERMISSION_WRITE_SIGNED: number;
			public static PERMISSION_WRITE_SIGNED_MITM: number;
			public static PROPERTY_BROADCAST: number;
			public static PROPERTY_EXTENDED_PROPS: number;
			public static PROPERTY_INDICATE: number;
			public static PROPERTY_NOTIFY: number;
			public static PROPERTY_READ: number;
			public static PROPERTY_SIGNED_WRITE: number;
			public static PROPERTY_WRITE: number;
			public static PROPERTY_WRITE_NO_RESPONSE: number;
			public static WRITE_TYPE_DEFAULT: number;
			public static WRITE_TYPE_NO_RESPONSE: number;
			public static WRITE_TYPE_SIGNED: number;
			public mDescriptors: java.util.List;
		}
	}
}
