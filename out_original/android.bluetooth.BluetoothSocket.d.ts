/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothSocket {
			public getRemoteDevice(): android.bluetooth.BluetoothDevice;
			public getInputStream(): java.io.InputStream;
			public getOutputStream(): java.io.OutputStream;
			public isConnected(): boolean;
			public connect(): void;
			public close(): void;
			public getMaxTransmitPacketSize(): number;
			public getMaxReceivePacketSize(): number;
			public getConnectionType(): number;
			public static TYPE_L2CAP: number;
			public static TYPE_RFCOMM: number;
			public static TYPE_SCO: number;
		}
	}
}
