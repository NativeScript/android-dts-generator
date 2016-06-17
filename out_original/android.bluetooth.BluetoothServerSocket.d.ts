/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothSocket.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothServerSocket {
			public accept(): android.bluetooth.BluetoothSocket;
			public accept(param0: number): android.bluetooth.BluetoothSocket;
			public close(): void;
			public toString(): string;
		}
	}
}
