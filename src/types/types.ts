export enum ElementType {
	Basic = 'Basic',
	Chat = 'Chat',
	Notification = 'Notification',
}

export type StreamLayer = {
	name: string;
	elements: Element[];
};

export type Element = {
	name: string;
	type: ElementType;
};
