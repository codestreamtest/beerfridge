"use strict";
import { Disposable, Uri, UriHandler, window } from "vscode";
import { Container } from "./container";

export class ProtocolHandler implements UriHandler {
	private disposable: Disposable;

	constructor() {
		this.disposable = window.registerUriHandler(this);
	}

	async beerHandleUri(uri: Uri) {
		await Container.webview.handleProtocol(uri);
	}

	// i made all the changes!
	dispose(): void {
		this.disposable && this.disposable.dispose();
	}
}
