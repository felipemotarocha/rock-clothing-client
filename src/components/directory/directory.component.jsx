import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";

import { Container, Item } from "./directory.styles";

const Directory = ({ collections }) => {
	return (
		<Container>
			{collections.map(({ id, title, imageUrl, routeName }) => (
				<Item key={id}>
					<DirectoryItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						routeName={routeName}
					/>
				</Item>
			))}
		</Container>
	);
};

export default Directory;
