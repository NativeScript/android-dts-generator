/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ScrollingView {
					public computeHorizontalScrollRange(): number;
					public computeHorizontalScrollOffset(): number;
					public computeHorizontalScrollExtent(): number;
					public computeVerticalScrollRange(): number;
					public computeVerticalScrollOffset(): number;
					public computeVerticalScrollExtent(): number;
				}
			}
		}
	}
}
