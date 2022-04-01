export type ActionType = ''


export type DestinyType = '';
export interface ActionFunc { }

export interface AmqpRequest {
	$id: string;
	$action: ActionType;
	$params: any[];
	$origin: string;
	$destiny: DestinyType;
}

// @ts-ignore
export interface AmqpResponse {
	$id: string;
	$name: string;
	$body: any;
	$origin: string;
	$destiny: string;
	$flow: boolean;
}