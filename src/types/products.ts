export type ProductProps = {
	name: string;
	description: string;
	price: string;
	image: string;
	created_at: EpochTimeStamp;
	id: string;
};

export type ProductStateProps = {
	products?: ProductProps[];
	cartItems?: ProductProps[];
	cartItemCount?: number;
};
